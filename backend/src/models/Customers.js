/*
Campos
name: Nombre del cliente
email: Correo electrónico del cliente
password: Contraseña del cliente
phone: Número de teléfono del cliente
birthday: Fecha de cumpleaños del cliente (Para aplicar descuento)
profilePhoto: Foto del cliente
 */

  import {Schema} from "mongoose"
  import {model} from "mongoose"
  
  const CustomerSchema = new Schema({
      name: {
          type: String,
          require: true
        },
      email:{
            type: String,
            require: true
         },
      password:{
            type:String,
            require: true,
        },
      phone:{
            type: Number,
            require: true,
        }, 
      birthday:{
            type: Date,
            require: true
        },    
      lastname: {
          type: String,
          require: true
      },
      profilePhoto: {
       type: String,
       require: false
      }
  
  },{
      timestamps : true,
      strict: false
  }
  );
  
  export default model("Customers", CustomerSchema);