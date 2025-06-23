import jsonwebtoken from 'jsonwebtoken';  
import bcrypt from 'bcryptjs';  
import nodemailer from "nodemailer";  
import crypto from "crypto";  
import { v2 as cloudinary } from "cloudinary";
import customersModel from "../models/Customers.js";
import { config } from '../config.js';

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})

const registerCustomerController = {};

registerCustomerController.registerCustomer = async (req, res) => {

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

        const existCustomer = await customersModel.findOne({ email })

        if (existCustomer) {

            return res.json({ message: "This customer already exists" })

        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newCustomer = new customersModel({
            name, 
            email, 
            password: passwordHash, 
            phone, 
            birthday, 
            lastname, 
            profilePhoto: imageURL
        });

        await newCustomer.save()

        const verificationCode = crypto.randomBytes(3).toString("hex")
        const expiresAt = Date.now() +  30 * 60 * 1000; // 30 minutos vigencia del código

        //TOKEN

        const token = jsonwebtoken.sign(
            {
                email,
                verificationCode,
                expiresAt
            },

            config.JWT.secret,

            {

            expiresIn: config.JWT.expiresIn

            }
        );

        // Se manda el token como cookie:

        res.cookie("verificationToken", token, {

            maxAge: 30 * 60 * 1000, // 30 minutos vigencia del código
            httpOnly: true,
            sameSite: "Lax"

        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.user,
                pass: config.email.pass
            }
        })

        const mailOptions = {
            from: config.email.user,
            to: email,
            subject: "Verificación de Correo",
            text: `Para verificar si eres dueño de este correo, ingresa este código: ${verificationCode}\n, tu código expira en 30 MINUTOS 🙂`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) 
                console.log("Error" + error)
                return res.json({message: "Error al enviar el email"})
        })

        return res.json({ message: "Customer registered, please verify your email" })

    } catch (error) {

        res.json({ message: "Error❌: " + error })

    }
};

registerCustomerController.verifyCodeEmail = async (req, res) => {
    
    const { verificationCode } = req.body;
    const token = req.cookies.verificationToken;

    console.log("Cookies recibidas:", req.cookies);

    if (!token) {
        return res.json({ message: "Porfavor, registra tu cuenta primero" })
    }

    try {

        const decoded = jsonwebtoken.verify(token, config.JWT.secret)
        const { email, verificationCode: storedCode } = decoded;

        if (verificationCode !== storedCode) {
            return res.json({ message: "Invalid verification code" })
        }

        const customer = await customersModel.findOne({ email })
        if (!customer) {
            return res.json({ message: "Customer not found" })
        }

        customer.isVerified = true,
            await customer.save();

        res.clearCookie("verificationToken")

        res.json({ message: "Email verified succesfully" })

    } catch (error) {
        res.json({ message: "Error: " + error })
    }
}

export default registerCustomerController;