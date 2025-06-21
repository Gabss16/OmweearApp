// ✅ Hook useGetData.js corregido para OmWeear
import { useEffect, useState } from "react";

export const useGetData = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, brandRes, provRes] = await Promise.all([
          fetch("http://localhost:4000/api/categories"),
          fetch("http://localhost:4000/api/brands"),
          fetch("http://localhost:4000/api/supliers"),
        ]);

        if (!catRes.ok || !brandRes.ok || !provRes.ok) {
          throw new Error("Alguna respuesta no fue exitosa");
        }

        const [catData, brandData, provData] = await Promise.all([
          catRes.json(),
          brandRes.json(),
          provRes.json(),
        ]);

        setCategories(
          catData.map((cat) => ({ _id: cat._id, label: cat.name }))
        );
        setBrands(
          brandData.map((brand) => ({ _id: brand._id, label: brand.name }))
        );
        setProviders(
          provData.map((provider) => ({ _id: provider._id, label: provider.company }))
        );
      } catch (error) {
        console.error("Error al obtener datos para dropdowns:", error);
      }
    };

    fetchData();
  }, []);

  return {
    categories,
    brands,
    providers,
  };
};
