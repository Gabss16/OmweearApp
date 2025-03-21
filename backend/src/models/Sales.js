import { Schema, model } from "mongoose";


const saleSchema = new Schema({
    shoppingCart_id: {
         type: Schema.Types.ObjectId, 
         required: true, 
         ref: "ShoppingCart" 
        },
    address: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    },
    shipDate: {
         type: Date, 
         required: true 
        },
    deliveryDate: {
         type: Date 
        },
    idPaymentMethod: {
         type: Schema.Types.ObjectId,
          required: true, 
          ref: "PaymentMethod" 
        }
},{
    timestamps: true,
    strict: false
});

export default model( "Sale", saleSchema)