const suppliersControllers = {};
import suppliersModel from "../models/Suppliers.js"

suppliersControllers.getSuppliers = async (req, res) => {
    const products = await suppliersModel.find()
    res.json(products)
}

suppliersControllers.postSuppliers = async (req, res) => {
    const { name, company, email, phone } = req.body;
    const newSupplier = new suppliersModel({ name, company, email, phone })
    await newSupplier.save()
    res.json({message: "Supplier Insert"})
}

suppliersControllers.deleteSuppliers = async (req, res) => {
    await suppliersModel.findByIdAndDelete(req.params.id)
    res.json({message: "Supplier Deleted"})
}

suppliersControllers.putSuppliers = async (req, res) => {
    const { name, company, email, phone } = req.body;

    await suppliersModel.findByIdAndUpdate(req.params.id, {
        name, 
        company, 
        email, 
        phone
    }, {new: true}
);
res.json({ message: "Supplier Updated"});
}

export default suppliersControllers