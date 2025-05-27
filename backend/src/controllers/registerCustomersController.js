import jsonwebtoken from 'jsonwebtoken';  
import bcrypt from 'bcryptjs';  
import nodemailer from "nodemailer";  
import crypto from "crypto";  

import customersModel from "../models/Customers.js";
import { config } from '../config.js';

const registerCustomerController = {};

registerCustomerController.registerCustomer = async (req, res) => {

    const { name, email, password, phone, birthday, lastname, profilePhoto } = req.body;

    try {

        const existCustomer = await customersModel.findOne({ email })

        if (existCustomer) {

            return res.json({ message: "This customer already exists" })

        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newCustomer = new customersModel({
            name, email, password: passwordHash, phone, birthday, lastname, profilePhoto 
        })

        await newCustomer.save()

        const verificationCode = crypto.randomBytes(3).toString("hex")
        const expiresAt = Date.now() + 2 * 60 * 60 * 1000; // 2 Hours

        //TOKEN
        const tokenCode = jsonwebtoken.sign({

            email, verificationCode, expiresAt
        },

            config.JWT.secret,
            { expiresIn: config.JWT.expiresIn },

            (error, token) => {
                if (error) console.log("Error found: " + error)
                res.cookie("verificationToken", token, { maxAge: 2 * 60 * 60 * 1000 })

            })

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
            text: `Para verificar queres dueño de la cuenta, utiliza este código: ${verificationCode}\n gracias por utilizar nuestra aplicación, tu código expira en 2 horas 🙂`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) console.log("Error" + error)
            res.json({message: "Email sent"})
        })

        res.json({ message: "Customer registered, please verify your email" })

    } catch (error) {

        res.json({ message: "Error❌: " + error })

    }
};

registerCustomerController.verifyCodeEmail = async (req, res) => {
    const { verificationCode } = req.body;
    const token = req.cookies.verificationToken;

    if (!token) {
        return res.json({ message: "Please registrer your account first" })
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

        res.clearCookie("VerificationToken")

        res.json({ message: "Email verified succesfully" })

    } catch (error) {
        res.json({ message: "Error: " + error })
    }
}

export default registerCustomerController;