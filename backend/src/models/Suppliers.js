import { Schema, model} from "mongoose";

const suppliersSchema = new Schema({
name: {
    type: String,
    require: true
},
company: {
    type: String,
    require: true
},
email: {
    type: String,
    require: true
},
phone: {
    type: Number,
    require: true
}

}, {
    timestamps: true,
    strict: false
})

export default model("Suppliers", suppliersSchema)

/*
name: Nombre del proveedor
company: Nombre de la empresa de la cuál es proveedor
email: Correo electrónico
phone: Número de teléfono
*/