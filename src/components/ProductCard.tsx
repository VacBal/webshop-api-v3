import React from "react";

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    price: number;
    stock: number;
    rating: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Ár: {product.price} Ft</p>
      <p>{product.stock > 0 ? "Rendelhető" : "Nincs készleten"}</p>
      <p>Értékelés: {"⭐".repeat(product.rating)}</p>
    </div>
  );
};

export default ProductCard;
