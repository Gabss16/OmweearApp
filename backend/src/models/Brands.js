/*
Campos: 

name: Nombre de la marca
description: Campo que proporciona la descripción de los productos de manera detallada.

*/

import { Schema, model } from "mongoose";

const brandsSchema = new Schema({
    name:{
        type: String,
        require: true,
        match: [
            /^[A-Za-z\s]+$/,
            "El nombre solo puede contener letras y espacios",
          ],
        
    },
    description:{
        type: String,
        require: true,
    },

},
{
    timestamps: true,
    strict: false,
}
);

export default model ("Brands", brandsSchema);