import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataProducts = () => {
  const ApiProducts = "http://localhost:4000/api/products";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [idBrand, setIdBrand] = useState("");
  const [sizesAvailable, setSizesAvailable] = useState("");
  const [idSupplier, setIdSupplier] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorProduct, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const cleanData = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setIdCategory("");
    setIdBrand("");
    setSizesAvailable("");
    setIdSupplier("");
    setError(null);
    setSuccess(null);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiProducts);
      if (!response.ok) throw new Error("Error al obtener los productos");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock || !idCategory || !idBrand || !sizesAvailable || !idSupplier) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    const newProduct = {
      name,
      description,
      price,
      stock,
      idCategory,
      idBrand,
      sizesAvailable,
      idSupplier,
    };

    try {
      const response = await fetch(ApiProducts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Error al registrar el producto");

      await response.json();
      toast.success("Producto registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al registrar el producto");
    }
  };

  const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${ApiProducts}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el producto");

    toast.success("Producto eliminado");
    await fetchData();   
    cleanData();         
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    toast.error("Ocurrió un error al eliminar el producto");
  }
};


  const updateProduct = (product) => {
    setId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setIdCategory(product.idCategory?._id || "");
    setIdBrand(product.idBrand?._id || "");
    setSizesAvailable(product.sizesAvailable);
    setIdSupplier(product.idSupplier?._id || "");
    setError(null);
    setSuccess(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      description,
      price,
      stock,
      idCategory,
      idBrand,
      sizesAvailable,
      idSupplier,
    };

    try {
      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
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
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    idCategory,
    setIdCategory,
    idBrand,
    setIdBrand,
    sizesAvailable,
    setSizesAvailable,
    idSupplier,
    setIdSupplier,
    products,
    loading,
    errorProduct,
    success,
    handleSubmit,
    handleUpdate,
    deleteProduct,
    updateProduct,
    cleanData,
  };
};

export default useDataProducts;
