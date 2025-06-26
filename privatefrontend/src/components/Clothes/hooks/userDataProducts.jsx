import { useState, useEffect } from "react";
import toast from "react-hot-toast";

//  Hook personalizado para manejar productos (crear, leer, actualizar, eliminar)

const useDataProducts = () => {
  const ApiProducts = "http://localhost:4000/api/products";


    //  Estados para los campos del formulario
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [idBrand, setIdBrand] = useState("");
  const [sizesAvailable, setSizesAvailable] = useState(null);
  const [idSupplier, setIdSupplier] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorProduct, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [image, setImage] = useState(null);
  

    //  Función para limpiar los datos del formulario
  const cleanData = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setIdCategory("");
    setIdBrand("");
    setSizesAvailable(null);
    setIdSupplier("");
    setError(null);
    setSuccess(null);
  };

    //  Función para obtener todos los productos

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiProducts);
      if (!response.ok) throw new Error("Error al obtener los productos");
      const data = await response.json();
      setProducts(data); //  Guardamos los productos en el estado
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false); //  Finaliza la carga
    }
  };

    const fetchDatabyId = async (id) => {
  try {
    const res = await fetch(`${ApiProducts}/${id}`);
    if (!res.ok) throw new Error("Producto no encontrado");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al cargar producto:", error);
    return null;
  }
};

//  Función para registrar un nuevo producto
const handleSubmit = async () => {
  // Validación
  if (!name || !description || !price || !stock || !idCategory || !idBrand || !sizesAvailable || !idSupplier) {
    toast.error("Todos los campos son obligatorios");
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("stock", stock);
  formData.append("idCategory", idCategory);
  formData.append("idBrand", idBrand);
  formData.append("sizesAvailable", sizesAvailable);
  formData.append("idSupplier", idSupplier);
  formData.append("imagen", image);

  try {
    const response = await fetch(ApiProducts, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Error al registrar el producto");

    await response.json();
    toast.success("Producto registrado correctamente");
    cleanData(); //  Limpia el formulario
    fetchData(); //  Refresca los datos
  } catch (error) {
    console.error(error);
    toast.error("Ocurrió un error al registrar el producto");
  }
};

  // Función para eliminar un producto
  const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${ApiProducts}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el producto");

    toast.success("Producto eliminado");
    await fetchData();   //  Refresca la lista de productos
    cleanData();         //  Limpia el formulario si el producto estaba en edición
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    toast.error("Ocurrió un error al eliminar el producto");
  }
};

  //  Cargar datos de un producto en el formulario para editarlo

  const updateProduct = (product) => {
    setId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setIdCategory(product.idCategory?._id || ""); //  Maneja referencias opcionales
    setIdBrand(product.idBrand?._id || "");
    setSizesAvailable(product.sizesAvailable);
    setIdSupplier(product.idSupplier?._id || "");
    setImage(null);
    setError(null);
    setSuccess(null);
  };

  //  Función para guardar los cambios de un producto editado
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("idCategory", idCategory);
      formData.append("idBrand", idBrand);
      formData.append("sizesAvailable", sizesAvailable);
      formData.append("idSupplier", idSupplier);
      if (image) formData.append("imagen", image);

      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) throw new Error("Error al actualizar el producto");

      toast.success("Producto actualizado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      toast.error("Ocurrió un error al actualizar el producto");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    id, setId,
    name, setName,
    description, setDescription,
    price, setPrice,
    stock, setStock,
    idCategory, setIdCategory,
    idBrand, setIdBrand,
    sizesAvailable, setSizesAvailable,
    idSupplier, setIdSupplier,
    image, setImage,
    products, loading, errorProduct, success,
    handleSubmit, handleUpdate,
    deleteProduct, updateProduct,
    cleanData, fetchDatabyId
  };
};


export default useDataProducts;
