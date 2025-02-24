import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PayPalButton = ({amount,onSuccess,onError}) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "Ae76dctoVJiAjdIoHnzOWc-xO4QrU4aFINExqDJ443a_lNVaZP687AsMx9pvzoDypUaCdhl_i3psnsUR" }}>
      <PayPalButtons createOrder={(data,actions)=>{
        return actions.order.create({
            purchase_units:[{amount:{value:amount}}]
        })
      }} onApprove={(data,actions)=>{
        return actions.order.capture().then(onSuccess)
      }} onError={onError} style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
