import customersModel from "../models/Customers.js"
import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"; 
import jsonwebtoken from "jsonwebtoken"; 
import { config } from "../config.js"

//Array de funciones

const loginController = {};

loginController.login = async(req, res)=> {

    //Pedimos las cosas
    const{email, password} = req.body;

    try{

        //Validamos los 3 posibles nvl
        //1. Admin, 2. Empleado, 3. Cliente

        let userFound; //Guarda el usuario encontrado
        let userType;  //Guardar tipo de usuario encontrado

        //1. Admin
        if(email === config.ADMIN.emailAdmin && password === config.ADMIN.password){
            
            userType = "admin";
            userFound = {_id: "admin"};

        } else {

            //2. Empleados
            userFound = await employeesModel.findOne({email})
            userType = "employee"
            if(!userFound){
                //3. Cliente
                userFound = await customersModel.findOne({email})
                userType = "customer"
            }

        }

        if(!userFound){
            return res.json({message: "User not found 🔎"});
        }

        // Validar la contraseña
        // Solamente si no es admin

        if(userType !== "admin"){
            const isMatch = await bcryptjs.compare(password, userFound.password)
            if(!isMatch){
                return res.json({message: "Invalid Password, Please write the correct password 🎃"})
            }
        }

        // TOKEN
        // Para validar que inició sesión

        jsonwebtoken.sign(

            {id: userFound._id, userType},

            config.JWT.secret,

            {expiresIn: config.JWT.expiresIn},

            (error, token) =>{
                if(error) console.log("Error ❌😖: " + error)

                    res.cookie("authToken", token)
                    res.json({message: "Login Succesful"})
            }

        )

    } catch (error) {

        console.log("Error ❌: " + error)
        res.json({message: "Error to save customer"})

    }
}

export default loginController