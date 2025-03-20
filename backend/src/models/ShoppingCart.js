import { Schema, model } from "mongoose";


const shoppingCartSchema = new Schema({
    userId: {
         type: Schema.Types.ObjectId, 
         required: true, ref: "costumer" },
    products: [{
        idProducts: { 
            type: Schema.Types.ObjectId, 
            required: true, 
            ref: "Product" },
        quantity: { 
            type: Number, 
            required: true, 
            min: 1 },
        subtotal: { 
            type: Number, 
            required: true }
    }],
    total: { 
        type: Number, 
        required: true }
},{
    timestamps: true,
    strict: false
});

export default model( "shoppingCart", shoppingCartSchema)