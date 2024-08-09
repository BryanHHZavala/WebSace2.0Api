import Categorias from "../models/categorias.model.js";

//! agregar
export const registerCat = async (req, res) => {
  const { _id, Id_Categorias, NombreCategorias } = req.body;

  try {
    const newCat = new Categorias({
      _id,
      Id_Categorias,
      NombreCategorias,
    });
    const catSaved = await newCat.save();
    res.json(catSaved);
  } catch (error) {
    console.log(error);
  }
};

//! obtener
export const getCat = async (req, res) => {
  const { id } = req.params;

  try {
    const cat = await Categorias.findById(id);
    if (!cat) {
      return res.status(404).json({ message: "Categoria no encontrada" });
    }
    res.json(cat);
  } catch (error) {
    console.error("Error al obtener la categoria: ", error);
    res
      .status(500)
      .json({ message: "Error al obtener la categoria", error: error.message });
  }
};

//! actualizar
export const putCat = async (req, res) => {
  const { id } = req.params;
  const { Id_Categorias, NombreCategorias } = req.body;

  try {
    const cat = await Categorias.findByIdAndUpdate(
      id,
      {
        Id_Categorias,
        NombreCategorias,
      },
      { new: true }
    );
    if (!cat) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    res
      .status(500)
      .json({
        message: "Error al actualizar la categoría",
        error: error.message,
      });
  }
};

//! DELETE
export const deleteCat = async (req, res) => {
  const { id } = req.params;

  try {
    const cat = await Categorias.findByIdAndDelete(id);
    if (!cat) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    res
      .status(500)
      .json({
        message: "Error al eliminar la categoría",
        error: error.message,
      });
  }
};

//!todas las categorias
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Categorias.find(); // Encuentra todas las categorías en la base de datos
    res.json(categories); // Devuelve las categorías como respuesta JSON
  } catch (error) {
    console.error('Error al obtener categorías: ', error);
    res.status(500).json({ message: 'Error al obtener categorías', error: error.message }); // Envia el error
  }
};