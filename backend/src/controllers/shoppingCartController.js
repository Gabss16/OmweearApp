// Array de métodos ( C R U D)
const shoppingCartController = {};


import shopingCartModel from "../models/ShoppingCart.js"
 
//SELECT
shoppingCartController.getCart = async (req, res) => {
const shoppingCart = await shopingCartModel.find().populate("userId").populate("products.idProducts")
res.json(shoppingCart)
}
 
// INSERT
shoppingCartController.createCart = async (req, res) => {
  const { userId, products, total } = req.body;

  try {
    const newCart = new shopingCartModel({ userId, products, total });
    await newCart.save();
    res.json({ message: "Shopping cart created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating cart", error });
  }
};

 
    //DELETE
    shoppingCartController.deleteCart = async (req, res) => {
    await shopingCartModel.findByIdAndDelete(req.params.id)
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