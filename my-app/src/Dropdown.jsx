import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dropdown() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-2">Select a Product</h2>
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">-- Choose a product --</option>
        {products.map((product) => (
          <option key={product.id} value={product.category}>
            {product.title}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div className="mt-4 text-gray-700">
          Selected Category: <strong>{selectedCategory}</strong>
        </div>
      )}
    </div>
  );
}
