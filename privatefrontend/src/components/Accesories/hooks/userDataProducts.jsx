import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const userDataProducts = () => {
  const ApiProducts = "http://localhost:4000/api/products";
  const ApiCategories = "http://localhost:4000/api/categories";
  const ApiBrands = "http://localhost:4000/api/brands";
  const ApiSuppliers = "http://localhost:4000/api/supliers";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [idBrand, setIdBrand] = useState("");
  const [idSupplier, setIdSupplier] = useState("");
 

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [errorProduct, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Limpiar datos
  const cleanData = () => {
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setIdCategory("");
    setIdBrand("");
    setIdSupplier("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // Obtener datos para selects
  const fetchSelects = async () => {
    try {
      const [catRes, brandRes, supRes] = await Promise.all([
        fetch(ApiCategories),
        fetch(ApiBrands),
        fetch(ApiSuppliers),
      ]);
      if (!catRes.ok || !brandRes.ok || !supRes.ok)
        throw new Error("Error al cargar categorías, marcas o proveedores");

      const [catData, brandData, supData] = await Promise.all([
        catRes.json(),
        brandRes.json(),
        supRes.json(),
      ]);

      setCategories(catData);
      setBrands(brandData);
      setSuppliers(supData);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar datos para selects");
    }
  };

  // Obtener productos
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiProducts);
      if (!response.ok) throw new Error("Error al obtener productos");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSelects();
    fetchData();
  }, []);

  // Registrar nuevo producto
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !price ||
      !stock ||
      !idCategory ||
      !idBrand ||
      !idSupplier 
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newProduct = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        idCategory,
        idBrand,
        idSupplier,
        
      };

      const response = await fetch(ApiProducts, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Error al registrar producto");

      toast.success("Producto registrado");
      setSuccess("Producto registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al registrar producto");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${ApiProducts}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error al eliminar producto");

      toast.success("Producto eliminado");
      fetchData();
    } catch (error) {
      toast.error("Error al eliminar producto");
      console.error(error);
    }
  };

  // Cargar producto para editar
  const updateProduct = (product) => {
    setId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setIdCategory(product.idCategory?._id || product.idCategory || "");
    setIdBrand(product.idBrand?._id || product.idBrand || "");
    setIdSupplier(product.idSupplier?._id || product.idSupplier || "");
    setError(null);
    setSuccess(null);
  };

  // Actualizar producto
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !price ||
      !stock ||
      !idCategory ||
      !idBrand ||
      !idSupplier 
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const updatedProduct = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        idCategory,
        idBrand,
        idSupplier,
      };

      const response = await fetch(`${ApiProducts}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error("Error al actualizar producto");

      toast.success("Producto actualizado");
      setSuccess("Producto actualizado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar producto");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
    idSupplier,
    setIdSupplier,
    errorProduct,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    products,
    setProducts,
    cleanData,
    handleSubmit,
    fetchData,
    deleteProduct,
    updateProduct,
    handleUpdate,
    categories,
    brands,
    suppliers,
  };
};

export default userDataProducts;
