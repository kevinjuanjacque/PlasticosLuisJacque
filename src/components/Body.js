import React, { useContext } from 'react';
import {IoIosAddCircle} from 'react-icons/io';
import { Context } from '../hooks/Context';
import img1 from '../assets/imagen1bolsas.jpeg';
import img2 from '../assets/imagen2bolsas.jpeg';
import img3 from '../assets/imagen3bolsas.jpeg';

export const Body = () => {
    const {setProducts,Products} = useContext(Context);
    console.log(window.screen.availWidth);
    const densidad = 0.93;
    const bolsas=2;
    const precio=2400;
    const gramos=1000;

    const tamanos=[
         {ancho:"8", alto:"25", espesor: 0.27}
        ,{ancho:"9", alto:"25", espesor: 0.27}
        ,{ancho:"10",alto:"25", espesor: 0.27}
        ,{ancho:"12",alto:"25", espesor: 0.25}
        ,{ancho:"12",alto:"30", espesor: 0.25}
        ,{ancho:"12",alto:"35", espesor: 0.25}
        ,{ancho:"12",alto:"40", espesor: 0.25}
        ,{ancho:"13",alto:"30", espesor: 0.25}
        ,{ancho:"13",alto:"35", espesor: 0.25}
        ,{ancho:"13",alto:"35", espesor: 0.25}
        ,{ancho:"13",alto:"40", espesor: 0.25}
        ,{ancho:"14",alto:"40", espesor: 0.25}
        ,{ancho:"15",alto:"30", espesor: 0.25}
        ,{ancho:"15",alto:"25", espesor: 0.25}
        ,{ancho:"15",alto:"35", espesor: 0.25}
        ,{ancho:"15",alto:"40", espesor: 0.25}
        ,{ancho:"20",alto:"30", espesor: 0.25}
        ,{ancho:"20",alto:"40", espesor: 0.25}
    ];

    const addToCart = (index,cantidad,precio) =>{
        
        setProducts({
            cantidad:Products.cantidad+1,
            productos:[...Products.productos,{nombre:tamanos[index].ancho+'x'+tamanos[index].alto, cantidad:parseInt(cantidad), precio:precio}]
        })
    }


    return (
        <div className="card m-3">
            <h1 className="text-white" align="center" style={{fontFamily:"AdineuePRO, Helvetica, Arial, sans-serif"}}>Bolsas transparente</h1>
            <p className="m-3 text-white"  
            style={{ 
                fontFamily: "AdihausDIN, Helvetica, Arial, sans-serif",
                fontSize:"20px" 
            }}>
                Fabrica de plasticos dedicada a bolsas transparentes de diferentes tampaños,
                con diferentes utilidades com ensaladas, aji, ajos, entre otras varierdades.
                Dejamos nuestros datos de contacto por cualquier consulta.
            </p>
            <div className="mx-auto">

                <div className="row " >
                    <img className="m-2 ml-5"  src={img1} alt="img1" width="250" height="250" />
                    <img className="m-2 ml-5" src={img2} alt="img2" width="250" height="250" />
                    <img className="m-2 ml-5" src={img3} alt="img3" width="250" height="250" />
                </div>
            </div>
            <table className={(window.screen.availWidth > 420 ) ? "table mb-5" : "table fontPhone mb-5"} width="300px">
                <thead>
                    <tr>
                    
                    <th scope="col">Ancho (cm)</th>
                    <th scope="col">Alto (cm)</th>
                    <th scope="col">Precio<br/><small>(precio por kilo)</small></th>
                    <th scope="col">{(window.screen.availWidth > 420 ) ? 'Cantidad'  : 'Cant.'} <br/><small>(1 display igual a 1000 bolsas)</small></th>
                    <th scope="col">Añadir</th>
                    </tr>
                </thead>
                <tbody className="mb-5">
                    {tamanos.map((p,index)=>{
                        return(
                        <tr key={new Date()+index}>
                            
                            <td>{p.ancho}</td>
                            <td>{p.alto}</td>
                            <td>${ parseInt(parseInt(p.ancho)*parseInt(p.alto)*p.espesor*bolsas*densidad * precio /gramos )*10 }</td>
                            <td width="1"> <input type="number" className="form-control" defaultValue={1} id={index} alt="input" size="1" /> </td>
                            <td align="center"><IoIosAddCircle onClick={()=>{addToCart(index,document.getElementById(index).value,parseInt(parseInt(p.ancho)*parseInt(p.alto)*p.espesor*bolsas*densidad * precio /gramos )*10  )}} style={{cursor:"pointer"}} /></td>
                        </tr>)
                    })}
                    
                    
                </tbody>
            </table>

            <div className="text-white m-5">
                <h1>CONTACTANOS VIA WSP</h1>
                wsp: +569 86865681
            </div>
        </div>
    )
}
