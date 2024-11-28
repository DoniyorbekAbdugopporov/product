import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../../skeleton/Skeleton";

const API_URL = "https://dummyjson.com";

// fetch -> axios
const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}/products`, { params: { linit: 12 } })
        .then((res) => {
          console.log(res.data.products);
          setData(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productItems = data?.map((pro) => (
    <div className="p-3 shadow-lg" key={pro.id}>
      <img
        className="w-full h-60 object-contain"
        src={pro.thumbnail}
        alt={pro.title}
      />
      <h3>{pro.title}</h3>
      <strong>{pro.price}</strong>
    </div>
  ));

  return (
    <div>
      {loading && <Skeleton count={12} />}
      <div className="container grid grid-cols-4 gap-3">{productItems}</div>
    </div>
  );
};

export default Products;
