import { Schema, model } from "mongoose";


const employeesShema = new Schema({
name: {
    type: String,
    required: true 
},
   email: { 
    type: String,
    required: true
},
   password: { 
    type: String, 
    required: true 
},
   phone: { 
    type: String, 
    required: true 
},
   dui: { 
    type: String, 
    required: true
},
   isss: { 
    type: Number, 
    required: true 
},
   charge: { 
    type: String, 
    required: true 
},
   profilePhoto: { 
    type: String
 },
   hireDate: {
     type: Date, 
     required: true 
    },
   birthday: { 
    type: Date, 
    required: true },
   gender: { 
    type: String, 
    required: true 
}
},{
    timestamps: true,
    strict: false
});

export default model( "Employees", employeesShema)