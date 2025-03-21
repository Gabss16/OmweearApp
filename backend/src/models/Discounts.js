import { Schema, model} from "mongoose";

const discountsSchema = new Schema({
discount: {
    type: Number,
    require: true
},
idProduct: [{
    type: Schema.Types.ObjectId,
    ref: "Products",
    require: true
}]

}, {
    timestamps: true,
    strict: false
})

export default model("Discounts", discountsSchema)