import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { Context } from '../hooks/Context';

emailjs.init("user_iU6Wp32E911EV1nldncxN");
export const FormPedido = () => {
    const {Products} = useContext(Context);
    const initForm={
        nombreCompleto:'',
        calle:'',
        numeroCasa:'',
        email:'',
        telefono:''
    };
    const [Form, setForm] = useState(initForm)
    const ChangeForm=(e)=>{
        setForm({...Form,[e.target.id]: e.target.value});
    }
    const confirmarPedido=(e)=>{
        e.preventDefault();
        emailjs.send("service_ilal99w","template_eyjiwg9",{
            nombre: Form.nombreCompleto,
            pedido: Products.productos.map(p=>{
                return 'de: '+p.nombre +' ---> cantidad:'+p.cantidad + '\n';
            }).join(),
            telefono: Form.telefono,
            email:(Form.email!=='') ? Form.email : 'No ingreso email',
            direccion: (Form.calle!=='' && Form.numeroCasa!=='' ) ? Form.calle+' #'+Form.numeroCasa : 'No ingreso dir'

            }).then(()=>{
                window.alert('Pedido enviado con exito, muy pronto te contactaremos para más detalles.\n Saludos.');
            }).catch((err)=>console.log(err));
        setForm(initForm);
    }
    return (
        <>
        <small className="text-white">(campos con '*' son obligatorios)</small>

        <form className="m-3" onSubmit={(e)=>{confirmarPedido(e)}}>

        <label className="text-white" forhtml="nombreCompleto">* Nombre y Apellido</label>
            <input onChange={(e)=>{ChangeForm(e)}} placeholder="Nombre y Apellido" value={Form.nombreCompleto} type="text" className="form-control" id="nombreCompleto" required/>
            <div className="form-inline mt-2" >

                <div>
                    <label className="text-white " forhtml="calle">Direccion</label>
                <input onChange={(e)=>{ChangeForm(e)}} value={Form.calle}  placeholder="Calle X " type="text" className="form-control" id="calle"/>
                </div>

                <div className=" ml-5">
                <label className="text-white " forhtml="numeroCasa">Numero de casa</label>
                <input onChange={(e)=>{ChangeForm(e)}} value={Form.numeroCasa} placeholder="1234" type="text" className="form-control" id="numeroCasa" />

                </div>
                <div className=" ml-5">
                    <label className="text-white " forhtml="email">Email</label>
                    <input onChange={(e)=>{ChangeForm(e)}} value={Form.email}  placeholder="Example@mail.com" type="email" className="form-control" id="email" />

                </div>
            </div>

            <label className="text-white mt-3" forhtml="telefono">* Telefono</label>
            <input onChange={(e)=>{ChangeForm(e)}}  value={Form.telefono} placeholder="+569 52767383" type="text" className="form-control" id="telefono" required/>

            <button className="btn btn-block btn-warning mt-3 text-white" disabled={Products.productos.length>0 ? false : true }> {Products.productos.length>0 ? 'Confirmar Pedido' : 'Debes insertar productos' } </button>
        </form>
        </>
    )
}
