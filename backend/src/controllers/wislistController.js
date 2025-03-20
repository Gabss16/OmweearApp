const wishListControllers = {};
import wishListModel from "../models/Wishlist.js"

wishListControllers.getWishlist = async (req, res) => {
    const wishlist = await wishListModel.find()
    res.json(wishlist)
}

wishListControllers.postWishlist = async (req, res) => {
    const { idUser, idProduct } = req.body;
    const newWishlist = new wishListModel({ idUser, idProduct })
    await newWishlist.save()
    res.json({message: "Wishlist Insert"})
}

wishListControllers.deleteWishlist = async (req, res) => {
    await wishListModel.findOneAndDelete(req.params.id)
    res.json({message: "Wishlist Deleted"})
}

wishListControllers.putWishlist = async (req, res) => {
    const { discount, idProduct } = req.body;

    await wishListModel.findByIdAndUpdate(req.params.id, {
        idUser,
        idProduct
    }, {new: true}
);
res.json({ message: "Wishlist Updated"});
}

export default wishListControllers