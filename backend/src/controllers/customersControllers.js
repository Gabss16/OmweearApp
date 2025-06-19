import CustomersModel from "../models/Customers.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

const customersControllers = {};


//SELECT
customersControllers.getCustomers = async (req, res) => {
    const customers = await CustomersModel.find()
    res.json(customers)
}

// INSERT
customersControllers.createCustomers = async (req, res) => {
    try {
        const { name, email, password, phone, birthday, lastname, } = req.body;
        let imageURL = "";

        if (req.file) {
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "public",
                    allowed_formats: ["png", "jpg", "jpeg"]
                }
            );
            imageURL = result.secure_url;
        }

        const newMovies = new moviesModel({
            name,
            email,
            password,
            phone,
            birthday,
            lastname,
            profilePhoto: imageURL
        });

        await newMovies.save();
        res.json({ message: "Cliente registrado" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
    //DELETE
customersControllers.deleteCustomers = async (req, res) => {
    try {
        await CustomersModel.findByIdAndDelete(req.params.id)
        res.json({ message: "Customer deleted" })
    } catch (error) {
        res.status(500).json({ message: "Error deleting customer", error })
    }
}


//UPDATE
customersControllers.updateCustomers = async (req, res) => {
   //  Solicito todos los valores
    const {name, email, password, phone, birthday, } = req.body;

    let imageURL = ""

    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        );

        imageURL = result.secure_url
    }

    await CustomersModel.findByIdAndUpdate(req.params.id,{
        name,
        email,
        password,
        phone,
        birthday,
        profilePhoto
    },{new: true}
);
// Mostramos un mensaje que todo se actualizó
res.json({ message: "Customer uptated"});
};

export default customersControllers;