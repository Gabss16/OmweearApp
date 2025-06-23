import productsModel from "../models/Products.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

const productsControllers = {};

// GET All
productsControllers.getAllProducts = async (req, res) => {
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

// GET by ID
productsControllers.getProductById = async (req, res) => {
  try {
    const product = await productsModel.findById(req.params.id)
      .populate("idCategory")
      .populate("idBrand")
      .populate("idSupplier");

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

// POST
productsControllers.postProducts = async (req, res) => {
  try {
    const { name, description, price, stock, idCategory, idBrand, sizesAvailable, idSupplier } = req.body;

    let imageURL = "";

    // Subir imagen a Cloudinary si se recibió archivo
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products",
        allowed_formats: ["png", "jpg", "jpeg"]
      });
      imageURL = result.secure_url;
    }

    const sizes = typeof sizesAvailable === "string"
      ? sizesAvailable.split(",").map(size => size.trim())
      : sizesAvailable;

    const newProduct = new productsModel({
      name,
      description,
      price,
      stock,
      idCategory,
      idBrand,
      idSupplier,
      sizesAvailable: sizes,
      imagen: imageURL
    });

    await newProduct.save();
    res.status(201).json({ message: "Producto creado correctamente", data: newProduct });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

// PUT
productsControllers.putProducts = async (req, res) => {
  try {
    const { name, description, price, stock, idCategory, idBrand, sizesAvailable, idSupplier } = req.body;

    let imageURL = req.body.imagen || "";

    // Subir nueva imagen si se envía archivo
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products",
        allowed_formats: ["png", "jpg", "jpeg"]
      });
      imageURL = result.secure_url;
    }

    const sizes = typeof sizesAvailable === "string"
      ? sizesAvailable.split(",").map(size => size.trim())
      : sizesAvailable;

    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        stock,
        idCategory,
        idBrand,
        idSupplier,
        sizesAvailable: sizes,
        imagen: imageURL,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto actualizado", data: updatedProduct });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};

// DELETE
productsControllers.deleteProducts = async (req, res) => {
  try {
    const deleted = await productsModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};

export default productsControllers;
