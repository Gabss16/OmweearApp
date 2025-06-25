import CustomersModel from "../models/Customers.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";
import bcryptjs from "bcryptjs"; 

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

        // HASHEAR LA CONTRASEÑA ANTES DE GUARDAR
        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hash(password, saltRounds);

        const newMovies = new CustomersModel({
            name,
            email,
            password: hashedPassword, // <-- USAR LA CONTRASEÑA HASHEADA
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
    try {
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

        // Preparar los datos para actualizar
        const updateData = {
            name,
            email,
            phone,
            birthday,
            profilePhoto: imageURL
        };

        if (password && password.trim() !== "") {
            const saltRounds = 10;
            updateData.password = await bcryptjs.hash(password, saltRounds);
        }

        await CustomersModel.findByIdAndUpdate(req.params.id, updateData, {new: true});
        
        res.json({ message: "Customer updated"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating customer", error });
    }
};

export default customersControllers;