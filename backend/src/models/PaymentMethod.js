import { Schema, model } from "mongoose";


const paymentMethodSchema = new Schema({
    paymentMethod: { 
        type: String, 
        required: true 
    }
},{
    timestamps: true,
    strict: false
});

export default model( "PaymentMethod", paymentMethodSchema)