const brandsControllers = {};

import brandsModel from "../models/Brands.js"


//SELECT
brandsControllers.getbrands = async (req, res) => {
    const brands = await brandsModel.find().populate('idBrand')
    res.json(brands)
}
// INSERT
brandsControllers.createbrands = async (req, res) => {
    const{ name, description } = req.body;
    const newbrands = new brandsModel ({name, description});
    await newbrands.save()
    res.json({ message : "brand saved"});
}
    //DELETE
brandsControllers.deletebrands = async (req, res) => {
    await brandsModel.findOneAndDelete(req.params.id)
    res.json({message:"brand deleted"})
    }
    
    //UPDATE
brandsControllers.updatebrands = async (req, res) => {
    //  Solicito todos los valores
    const {name, description} = req.body;
    
        await brandsModel.findByIdAndUpdate(req.params.id,{
            name, 
            description
        },{new: true}
    );
    // muestro un mensaje que todo se actulizó
    res.json({ message: "brand uptated"});
    };
    export default brandsControllers;