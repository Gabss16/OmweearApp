/*
Campos: 

    id: Identificador único para cada categoría
    name: Nombre de la categoría 
    description: Campo que proporciona la descripción de las categorías de manera detallada.

*/

import { Schema, model } from "mongoose";

const categoriesSchema = new Schema({
    
    name:{
        type: String,
        require: true,
        
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

export default model ("Categories", categoriesSchema);