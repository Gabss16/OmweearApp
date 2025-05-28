import productsModel from "../models/Products.js";

const productsControllers = {};

// GET
productsControllers.getProducts = async (req, res) => {
  try {
    const products = await productsModel.find()
      .populate("idCategory")
      .populate("idBrand")
      .populate("idSupplier");

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting products" });
  }
};

// POST
productsControllers.postProducts = async (req, res) => {
  try {
    const { name, description, price, stock, idCategory, idBrand, images, sizesAvailable, idSupplier } = req.body;

    const newProduct = new productsModel({
      name,
      description,
      price,
      stock,
      idCategory,
      idBrand,
      images, // Puede ser una URL o base64 desde el frontend
      sizesAvailable,
      idSupplier
    });

    await newProduct.save();
    res.json({ message: "Product inserted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inserting product" });
  }
};

// PUT
productsControllers.putProducts = async (req, res) => {
  try {
    const { name, description, price, stock, idCategory, idBrand, images, sizesAvailable, idSupplier } = req.body;

    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        stock,
        idCategory,
        idBrand,
        images,
        sizesAvailable,
        idSupplier
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated", data: updatedProduct });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating product" });
  }
};

// DELETE
productsControllers.deleteProducts = async (req, res) => {
  try {
    console.log("Intentando eliminar producto con ID:", req.params.id); 

    await productsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting product" });
  }
};


export default productsControllers;