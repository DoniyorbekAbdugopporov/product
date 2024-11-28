import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Modal from "../modal/Modal";
import Skeleton from "../skeleton/Skeleton";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true); // Yozib olish jarayoni boshlanganda loading true bo'ladi
      const res = await axios.get("/products");
      setProducts(res.data.products); // Ma'lumotlarni state-ga yuklash
    } catch (error) {
      console.error("Xatolik yuz berdi:", error); // Xatolikni log qilish
    } finally {
      setLoading(false); // Yozib olish tugagandan so'ng loading false bo'ladi
    }
  };

  const openModal = (url) => {
    setOpen(true);
    setImgUrl(url);
  }

  useEffect(() => {
    getData();
  }, []);

  const productItems = products?.map((prod) => (
    <div onClick={() => openModal(prod.thumbnail)} className="product__item p-3 shadow-lg cursor-pointer dark:bg-slate-300" key={prod.id}>
      <img
        className="w-full h-60 object-contain"
        src={prod.thumbnail}
        alt={prod.title}
      />
      <h3>{prod.title}</h3>
      <strong>{prod.price}</strong>
    </div>
  ));

  return (
    <div>
      {open && <Modal imgUrl={imgUrl} setOpen={setOpen} />}
      <section className="products">
        <div className="container">
          {loading && <Skeleton count={12} />}
          <div className="product__wrapper grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-sm:grid-cols-2 dark:bg-gray-900 max-lg:text-base">
            {productItems}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
