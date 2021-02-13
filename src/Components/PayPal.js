import axios from "axios";
import React, {useRef,  useEffect} from "react";

export default function Paypal(props) {
const paypal = useRef()

useEffect(()=> {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
            return actions.order.create({
                intent:"CAPTURE",
                purchase_units: [
                    {
                        description: props.desc,
                        amount: {
                            current_code:"USD",
                            value: props.amnt
                        },
                    },
                ],
            });
        },
onApprove: async (data, actions) => {
    const order = await actions.order.capture();
    const amount = props.amnt
    const oid = order.id
    const meals = props.items
    const idesc = props.desc
    axios.post('./api/orderheader',{oid,amount})
    axios.post('./api/orderdetail',{meals,oid, idesc})
},
onError: (err) => {

    console.log(err)
}
    })
    .render(paypal.current)
  
}, [props.desc, props.amnt, props.items])

    return(

        <div>
            <div ref={paypal}></div>        
           
        </div>
    )
}
