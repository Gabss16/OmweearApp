const productsControllers = {};
import productsModel from "../models/Products.js"

productsControllers.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
}

productsControllers.postProducts = async (req, res) => {
    const { idUser, idProduct } = req.body;
    const newProducts = new productsModel({ idUser, idProduct })
    await newProducts.save()
    res.json({message: "Product Insert"})
}

productsControllers.deleteProducts = async (req, res) => {
    await productsModel.findOneAndDelete(req.params.id)
    res.json({message: "Product Deleted"})
}

productsControllers.putProducts = async (req, res) => {
    const { idUser, idProduct } = req.body;

    await productsModel.findByIdAndUpdate(req.params.id, {
        idUser,
        idProduct
    }, {new: true}
);
res.json({ message: "Product Updated"});
}

export default productsControllers