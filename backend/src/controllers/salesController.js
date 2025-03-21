// Array de métodos ( C R U D)
const salesController = {};


import salesModel from "../models/Sales.js"
 
//SELECT
salesController.getSales = async (req, res) => {
const sale = await saleModel.find()
res.json(sale)
}
 
// INSERT
salesController.createSale = async (req, res) => {
    const{shoppingCart_id, address, status, shipDate, deliveryDate, idPaymentMethod} = req.body;
    const newSale = new salesModel ({shoppingCart_id, address, status, shipDate, deliveryDate, idPaymentMethod});
    await newSale.save()
    res.json({ message : "Sale save "});
}
 
    //DELETE
    salesController.deleteSale = async (req, res) => {
    await salesModel.findOneAndDelete(req.params.id)
    res.json({message:"Sale  deleted"})
}




 
//UPDATE
salesController.updateSale = async (req, res) => {
   //  Solicito todos los valores
    const {shoppingCart_id, address, status, shipDate, deliveryDate, idPaymentMethod} = req.body;
 
    await salesModel.findByIdAndUpdate(req.params.id,{
        shoppingCart_id, 
        address, 
        status, 
        shipDate, 
        deliveryDate, 
        idPaymentMethod
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "Sale uptated"});
};

export default salesController;