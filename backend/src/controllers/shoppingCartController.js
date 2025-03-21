// Array de métodos ( C R U D)
const shoppingCartController = {};


import shopingCartModel from "../models/ShoppingCart.js"
 
//SELECT
shoppingCartController.getCart = async (req, res) => {
const shoppingCart = await shopingCartModel.find().populate("userId").populate("products")
res.json(shoppingCart)
}
 
// INSERT
shoppingCartController.createCart = async (req, res) => {
    const{userId, products, idProducts, quantity, subtotal, total} = req.body;
    const newCart = new shopingCartModel ({userId, products, idProducts, quantity, subtotal, total});
    await newCart.save()
    res.json({ message : "Shopping cart created "});
}
 
    //DELETE
    shoppingCartController.deleteCart = async (req, res) => {
    await shopingCartModel.findOneAndDelete(req.params.id)
    res.json({message:"Shopping cart deleted"})
}




 
//UPDATE
shoppingCartController.updateCart = async (req, res) => {
   //  Solicito todos los valores
    const {userId, products, idProducts, quantity, subtotal, total} = req.body;
 
    await shopingCartModel.findByIdAndUpdate(req.params.id,{
        userId,
        products, 
        idProducts, 
        quantity, 
        subtotal, 
        total
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "Shopping cart uptated"});
};

export default shoppingCartController;