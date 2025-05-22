// Array de métodos ( C R U D)
const PaymentMethodController = {};


import PaymentMethodModel from "../models/PaymentMethod.js"
 
//SELECT
PaymentMethodController.getPaymentMethod = async (req, res) => {
const paymentMethod = await PaymentMethodModel.find()
res.json(paymentMethod)
}
 
// INSERT
PaymentMethodController.createPaymentMethod = async (req, res) => {
    const{paymentMethod} = req.body;
    const newPaymentMethod = new PaymentMethodModel ({paymentMethod});
    await newPaymentMethod.save()
    res.json({ message : "PaymentMethod save "});
}
 
    //DELETE
    PaymentMethodController.deletePaymentMethod = async (req, res) => {
    await PaymentMethodModel.findByIdAndDelete(req.params.id)
    res.json({message:"PaymentMethod  deleted"})
}




 
//UPDATE
PaymentMethodController.updatePaymentMethod = async (req, res) => {
   //  Solicito todos los valores
    const {paymentMethod} = req.body;
 
    await PaymentMethodModel.findByIdAndUpdate(req.params.id,{
        paymentMethod
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "PaymentMethod uptated"});
};

export default PaymentMethodController;
