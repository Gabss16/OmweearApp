import nodemailer from "nodemailer"
import { config } from "../config.js"

const transporter = nodemailer.createTransport ({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config.email.user, 
        pass: config.email.pass,
    },
});

const sendEmail = async (to, subject, body, html ) => {
    try{
        const info = await transporter.sendMail({

            from: "levisarav007@gmail.com",
            to,
            subject,
            body,
            html,

        });
        return info;
    } catch (error) {
        console.log("error" + error);
    }
};

const HTMLRecoverEmail = (code) => {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                background-color: #fff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
            }
            .header h1 {
                color: #007BFF;
                margin: 0;
                font-size: 24px;
            }
            .content {
                padding: 20px 0;
                text-align: center;
            }
            .code {
                font-size: 32px;
                font-weight: bold;
                color: #007BFF;
                background-color: #f0f8ff;
                padding: 15px;
                border-radius: 5px;
                display: inline-block;
                margin: 20px 0;
                letter-spacing: 2px;
            }
            .footer {
                text-align: center;
                font-size: 12px;
                color: #aaa;
                margin-top: 20px;
            }
    </style>
</head>
        
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Recuperación de Contraseña</h1>
                    </div>
                <div class="content">
                        <p>Hola,</p>
                            <p>Hemos recibido una solicitud para restablecer tu contraseña. Usa el siguiente código para continuar con el proceso:</p>
                                <div class="code">${code}</div>
                            <p>Si no solicitaste este cambio, puedes ignorar este mensaje.</p>
                </div>
                    <div class="footer">
                        <p>Este es un mensaje automático, por favor no respondas a este correo.</p>
                    </div>
                </div>
        </body>
        </html>`;
};

export {sendEmail, HTMLRecoverEmail} ;

