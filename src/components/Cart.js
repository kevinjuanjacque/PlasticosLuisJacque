import React, { useContext } from 'react';
import { Context } from '../hooks/Context';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormPedido } from './FormPedido';

export const Cart = () => {
    const {Products} = useContext(Context);
    return (
        <>  
            
            <div className="card m-3">
                <h1 className="text-white" align="center"><Link to="/" className="btn"><AiOutlineArrowLeft size="40" color="white" /> </Link> Resumen del pedido</h1>
                <table className="table mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Medida ( Ancho x Alto ) cm</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody className="mb-5">
                        {
                            Products.productos.map((p,index)=>{
                                return ( 
                                    
                                        <tr key={new Date()+index}>
                                            <th scope="row">{p.nombre}</th>
                                            <td>${p.precio*p.cantidad}</td>
                                            <td align="center">{p.cantidad}</td>
                                        </tr>
                                
                                );
                            })
                        }
                        <tr className="mt-3">
                            <th scope="row">TOTAL APROX. <small>(Monto puede variar segun peso de las bolsas)</small></th>
                            <td>{Products.productos.reduce((a,b)=>a+b.precio*b.cantidad,0)}</td>
                        </tr>
                    </tbody>
                </table>

                <FormPedido className="mt-3" />

            </div>
        </>
    )
}
