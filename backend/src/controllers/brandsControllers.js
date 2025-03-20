const brandsControllers = {};

import brandsModel from "../models/Brands.js"


//SELECT
brandsControllers.getbrands = async (req, res) => {
    const brandss = await brandsModel.find().populate('idCliente')
    res.json(brandss)
}
// INSERT
brandsControllers.createbrands = async (req, res) => {
    const{ name, description, idCliente } = req.body;
    const newbrands = new brandsModel ({ comment, rating,idCliente});
    await newbrands.save()
    res.json({ message : "brands saved"});
}
    //DELETE
brandsControllers.deletebrandss = async (req, res) => {
    await brandsModel.findOneAndDelete(req.params.id)
    res.json({message:"brands deleted"})
    }
    
    //UPDATE
brandsControllers.updatebrandss = async (req, res) => {
    //  Solicito todos los valores
    const {comment, rating, idCliente} = req.body;
    
        await brandsModel.findByIdAndUpdate(req.params.id,{
            comment,
            rating,
            idCliente
        },{new: true}
    );
    // muestro un mensaje que todo se actulizó
    res.json({ message: "brands uptated"});
    };
    export default brandsControllers;