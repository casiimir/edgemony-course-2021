import { useState, useEffect } from "react";
import Image from "next/image";
import LayoutDefault from "../layout/index";
import styles from "../styles/Galleria.module.scss";

const loremPicsums = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/201/300",
  "https://picsum.photos/200/301",
];

function Galleria() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(loremPicsums);
  }, []);

  return (
    <LayoutDefault>
      <div className={styles.wrapper}>
        {images.map((img) => (
          <img
            src={img}
            alt={img}
            width={200}
            height={300}
            key={img}
            className={styles.img}
          />
        ))}
      </div>
    </LayoutDefault>
  );
}

export default Galleria;
