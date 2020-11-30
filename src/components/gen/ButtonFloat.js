import React, { useContext } from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Context } from '../../hooks/Context';
export const ButtonFloat = () => {
    const {Products} = useContext(Context)
    return (
        <>
            <div className="fixed-bottom m-5 " >
                <Link to="/cart" className="btn btn-warning float-right text-white" > <AiOutlineShopping className="mb-2" color="white" size="30"/> {Products.cantidad} {(Products.cantidad>0) && 'Click para confirmar pedido' }</Link>
            </div>
        </>
    )
}
