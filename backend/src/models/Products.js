import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  name: {
    type: String,
    required: true, // corregido de `require` a `required`
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  idCategory: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  idBrand: {
    type: Schema.Types.ObjectId,
    ref: "Brands",
    required: true,
  },
  imagen: {
    type: String,
  },
  sizesAvailable: {
    type: [String], // Ahora es un arreglo de strings
    required: true,
  },
  idSupplier: {
    type: Schema.Types.ObjectId,
    ref: "Suppliers",
    required: true,
  },
}, {
  timestamps: true,
  strict: false,
});

export default model("Products", productsSchema);
