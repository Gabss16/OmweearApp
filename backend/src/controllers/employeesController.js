import employeesModel from "../models/Employees.js"
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";
import bcryptjs from "bcryptjs"; 

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

// Array de métodos ( C R U D)
const employeesController = {};

//SELECT
employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
}
 
// INSERT
employeesController.createEmployees = async (req, res) => {
    const{name, email, phone, password, dui, isss, charge, profilePhoto, hireDate, birthday, gender} = req.body;
    const newEmployee = new employeesModel ({name, email, phone, password, dui, isss, charge, profilePhoto, hireDate, birthday, gender});
    await newEmployee.save()
    res.json({ message : "employees saved"});
}
 
//DELETE
employeesController.deleteEmployees = async (req, res) => {

    try {
        await employeesModel.findByIdAndDelete(req.params.id)
        res.json({message:"employees deleted"})
    } catch (error) {
        res.status(500).json({ message: "Error to delete employee", error })
    }
    
}

//UPDATE
employeesController.updateEmployees = async (req, res) => {
   
   try {

    const {name, email, phone, password, dui, isss, charge, hireDate, birthday, gender, } = req.body;
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

    const updateData = {

        name, 
        email, 
        phone,
        password, 
        dui, 
        isss, 
        charge,
        profilePhoto: imageURL,
        hireDate, 
        birthday, 
        gender

        };

        if (password && password.trim() !== "") {

            const saltRounds = 10;
            updateData.password = await bcryptjs.hash(password, saltRounds);

        }

        if (password && password.trim() !== "") {

            const saltRounds = 10;
            updateData.password = await bcryptjs.hash(password, saltRounds);

        }

        await employeesModel.findByIdAndUpdate(req.params.id, updateData,{new: true});

        res.json({ message: "Employee updated"});

   } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Error to update employee", error });

   }
};

export default employeesController;