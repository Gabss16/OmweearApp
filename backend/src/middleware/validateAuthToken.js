import jsonwebtoken from "jsonwebtoken"
import { config } from "../config.js"

export const validateAuthToken = (allowedUserTypes = []) => {
    return (req, res, next) => {
        try {
            
            //Extraer el token de las cookies

            const { authToken } = req.cookies;

            //Si no existe el token, mostramos un mensaje de error

            if(!authToken){
                res.json({message: "No auth token found, you must log in"})
            }

            //Extraer la información del token

            const decoded = jsonwebtoken.verify(authToken, config.JWT.secret)

            //Verificar si el rol puede ingresar o no

            if(!allowedUserTypes.includes(decoded.userType)){
                return res.json({message: "Access denied"})
            }

            next()

        } catch (error) {
            console.log("error"+error)
        }
    }
}