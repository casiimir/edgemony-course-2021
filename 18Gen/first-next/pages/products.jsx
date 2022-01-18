import axios from "axios";
import { useState, useEffect } from "react";
import LayoutDefault from "../Layout/index";
import Image from "next/image";
import styles from "../styles/Products.module.scss";

export default function Products() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductList(res.data));
  }, []);

  return (
    <LayoutDefault>
      <h1>Prodotti</h1>
      <div className={styles.products}>
        {productList.length ? (
          productList.map((product) => (
            <div className={styles.product} key={product.title}>
              <p>{product.category}</p>
              <Image
                src={product.image}
                alt={product.title}
                width="100"
                height="160"
              />
            </div>
          ))
        ) : (
          <div className={styles.spinner}>
            <Image
              src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340"
              width="300"
              height="300"
              alt="spinner"
            ></Image>
          </div>
        )}
      </div>
    </LayoutDefault>
  );
}

// Server side rendering...
export async function getServerSideProps(context) {
  console.log(context.resolvedUrl);

  return {
    props: {}, // will be passed to the page component as props
  };
}
