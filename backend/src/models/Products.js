import { Schema, model} from "mongoose";

const productsSchema = new Schema({
name: {
    type: String,
    require: true
},
description: {
    type: String,
    require: true
},
price: {
    type: Number,
    require: true
},
stock: {
    type: Number,
    require: true
},
idCategory: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    require: true
},
idBrand: {
    type: Schema.Types.ObjectId,
    ref: "Brands",
    require: true
},
images: {
    type: String,
    require: false
},

sizesAvailable: {
    type: String,
    require: true
},
idSupplier: {
    type: Schema.Types.ObjectId,
    ref: "Suppliers",
    require: true
}
}, {
    timestamps: true,
    strict: false
})

export default model("Products", productsSchema)

/*
name: Nombre del producto
description: Breve descripción del producto
price: Precio del producto
stock: Cantidad de productos disponibles
idCategory: Id de la categoría del producto
idBrand: Id de la marca del producto
images: Vista previa del producto y sus estilos disponibles
sizesAvailable: Tallas disponibles del producto
supplierId: Id del proveedor
*/