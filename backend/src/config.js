import dotenv from "dotenv";
dotenv.config();
export const config ={
    db: {
        URI: process.env.BD_URI 
    },
    server: {
        port: process.env.PORT || 4000,
    }
};