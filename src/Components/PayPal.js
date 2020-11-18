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
     console.log("order info", order.purchase_units[0].description)
},
onError: (err) => {

    console.log(err)
}
    })
    .render(paypal.current)
  
}, [props.desc, props.amnt])

    return(

        <div>
            <div ref={paypal}></div>        
           
        </div>
    )
}
