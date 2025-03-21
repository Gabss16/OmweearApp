// Array de métodos ( C R U D)
const customersControllers = {};


import CustomersModel from "../models/Customers.js";

//SELECT
customersControllers.getCustomers = async (req, res) => {
const customers = await CustomersModel.find()
res.json(customers)
}

// INSERT
customersControllers.createCustomers = async (req, res) => {
    const{ name, email, password, phone, birthday, profilePhoto } = req.body;
    const newcustomers = new CustomersModel ({name, email, password, phone, birthday, profilePhoto });
    await newcustomers.save()
    res.json({ message : "Customer saved"});
}
    //DELETE
customersControllers.deleteCustomers = async (req, res) => {
    await customersControllers.findOneAndDelete(req.params.id)
    res.json({message:"Customer deleted"})
}

//UPDATE
customersControllers.updateCustomers = async (req, res) => {
   //  Solicito todos los valores
    const {name, email, password, phone, birthday, profilePhoto} = req.body;

    await CustomersModel.findByIdAndUpdate(req.params.id,{
        name,
        email,
        password,
        phone,
        birthday,
        profilePhoto
    },{new: true}
);
// muestro un mensaje que todo se actualizó
res.json({ message: "Customer uptated"});
};
export default customersControllers;