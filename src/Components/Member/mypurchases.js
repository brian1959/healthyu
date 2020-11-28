import React from "react";


export default function Mypurchases(props) {


    return(
        <div className='my-purchases-container'>
        <div className="my-purchases-field header-ordernum">{props.ordernum}</div>
        <div className="my-purchases-field header-meal"><a href={`/#/${props.purchasetitle}`}>{props.purchasetitle}</a></div>
        <div className="my-purchases-field header-itemcost">{props.purchasecost}</div>
        </div>
    )

   
}

  