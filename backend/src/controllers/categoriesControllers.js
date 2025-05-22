// Array de métodos ( C R U D)
const categoriesController = {};


import categoriesModel from "../models/Categories.js"

//SELECT
categoriesController.getCategories = async (req, res) => {
const categories = await categoriesModel.find()
res.json(categories)
}

// INSERT
categoriesController.createCategories = async (req, res) => {
    const{ name, description} = req.body;
    const newCategories = new categoriesModel ({ name, description});
    await newCategories.save()
    res.json({ message : "categorie saved"});
}
    //DELETE
categoriesController.deleteCategories = async (req, res) => {
    await categoriesModel.findByIdAndDelete(req.params.id)
    res.json({message:"categorie deleted"})
}

//UPDATE
categoriesController.updateCategories = async (req, res) => {
   //  Solicito todos los valores
    const { name, description} = req.body;

    await categoriesModel.findByIdAndUpdate(req.params.id,{
       name,
       description,
    },{new: true}
);
// muestro un mensaje que todo se actulizó
res.json({ message: "categorie uptated"});
};
export default categoriesController;