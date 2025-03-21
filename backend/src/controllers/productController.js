const productsControllers = {};
import productsModel from "../models/Products.js"

productsControllers.getProducts = async (req, res) => {
    const products = await productsModel.find().populate("idCategory").populate("idBrand").populate("idSupplier")
    res.json(products)
}

productsControllers.postProducts = async (req, res) => {
    const { name, description, price, stock, idCategory, idBrand, images, sizesAvailable, idSupplier } = req.body;
    const newProducts = new productsModel({ name, description, price, stock, idCategory, idBrand, images, sizesAvailable, idSupplier })
    await newProducts.save()
    res.json({message: "Product Insert"})
}

productsControllers.deleteProducts = async (req, res) => {
    await productsModel.findOneAndDelete(req.params.id)
    res.json({message: "Product Deleted"})
}

productsControllers.putProducts = async (req, res) => {
    const { name, description, price, stock, idCategory, idBrand, images, sizesAvailable, idSupplier } = req.body;

    await productsModel.findByIdAndUpdate(req.params.id, {
        name, 
        description, 
        price, 
        stock, 
        idCategory, 
        idBrand, 
        images, 
        sizesAvailable, 
        idSupplier
    }, {new: true}
);
res.json({ message: "Product Updated"});
}

export default productsControllers