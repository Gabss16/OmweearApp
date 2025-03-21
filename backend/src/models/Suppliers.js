import { Schema, model} from "mongoose";

const suppliersSchema = new Schema({
name: {
    type: string,
    require: true
},
company: {
    type: string,
    require: true
},
email: {
    type: string,
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