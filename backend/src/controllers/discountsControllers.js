const discountsControllers = {};
import discountsModel from "../models/Discounts.js"

discountsControllers.getDiscounts = async (req, res) => {
    const discounts = await discountsModel.find().populate("idProduct")
    res.json(discounts)
}

discountsControllers.postDiscounts = async (req, res) => {
    const { discount, idProduct } = req.body;
    const newDiscount = new discountsModel({ discount, idProduct })
    await newDiscount.save()
    res.json({message: "Discount Insert"})
}

discountsControllers.deleteDiscounts = async (req, res) => {
    await customersModel.findByIdAndDelete(req.params.id)
    res.json({message: "Discount Deleted"})
}

discountsControllers.putDiscounts = async (req, res) => {
    const { discount, idProduct } = req.body;

    await discountsModel.findByIdAndUpdate(req.params.id, {
        discount,
        idProduct
    }, {new: true}
);
res.json({ message: "Discount Updated"});
}

export default discountsControllers