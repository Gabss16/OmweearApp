// Array de métodos ( C R U D)
const salesController = {};


import salesModel from "../models/Sales.js"
 
//SELECT
salesController.getSales = async (req, res) => {
const sale = await salesModel.find().populate("shoppingCart_id").populate("idPaymentMethod")
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
    await salesModel.findByIdAndDelete(req.params.id)
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

// UPDATE SOLO ESTADO
salesController.updateStatus = async (req, res) => {
    try {
      const { status } = req.body;
  
      const updatedSale = await salesModel.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
  
      if (!updatedSale) {
        return res.status(404).json({ message: "Venta no encontrada" });
      }
  
      res.json({
        message: "Estado de la venta actualizado correctamente",
        sale: updatedSale
      });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el estado", error });
    }
  };
  

export default salesController;