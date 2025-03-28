import { Schema, model} from "mongoose";

const wishListSchema = new Schema({
idUser: {
    type: String,
    require: true
},
idProduct: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    require: true
}

}, {
    timestamps: true,
    strict: false
})

export default model("Wishlist", wishListSchema)