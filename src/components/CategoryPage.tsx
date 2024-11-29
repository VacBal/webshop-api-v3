import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchProducts } from ".//utils/api";

const CategoryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("id") || "";
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [orderBy, setOrderBy] = useState("name.ASC");
  const [page, setPage] = useState(0);
  const limit = 6;

  const fetchCategoryProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts(categoryId, orderBy, page * limit, limit);
      setProducts(response.data);
      setTotal(response.total);
    } catch (error) {
      console.error("Hiba a termékek betöltésekor:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryId, orderBy, page]);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
    setPage(0); // Rendezéskor az első oldalra ugrik
  };

  const handlePageChange = (direction: "next" | "prev") => {
    setPage((prevPage) => (direction === "next" ? prevPage + 1 : Math.max(prevPage - 1, 0)));
  };

  return (
    <div className="category-page">
      <h1>{categoryId.replace("-", " ")}</h1>
      <div className="controls">
        <label>
          Rendezés:
          <select value={orderBy} onChange={handleOrderChange}>
            <option value="name.ASC">Név (növekvő)</option>
            <option value="name.DESC">Név (csökkenő)</option>
            <option value="price.ASC">Ár (növekvő)</option>
            <option value="price.DESC">Ár (csökkenő)</option>
            <option value="rating.ASC">Értékelés (növekvő)</option>
            <option value="rating.DESC">Értékelés (csökkenő)</option>
          </select>
        </label>
      </div>
      {loading ? (
        <p>Betöltés...</p>
      ) : (
        <div className="product-grid">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className="pagination">
        <button onClick={() => handlePageChange("prev")} disabled={page === 0}>
          Előző oldal
        </button>
        <button onClick={() => handlePageChange("next")} disabled={(page + 1) * limit >= total}>
          Következő oldal
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
