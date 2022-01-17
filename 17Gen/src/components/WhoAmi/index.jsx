import { useState, useRef } from "react";
import "./index.css";

const moveRef = (element, dir) => {
  if (dir === "left") element.current.scrollLeft += 300;
  if (dir === "right") element.current.scrollLeft -= 300;

  if (element.current.scrollLeft >= 300) element.current.scrollLeft = 0;
  if (element.current.scrollLeft === 0) element.current.scrollLeft = 314;
};

function WhoAmi() {
  const handleInputChange = (e) => setInputState(e.target.value);

  const setTitle = (e) => {
    e.preventDefault();
    setHeaderTitle(inputState);
  };

  // Hooks
  const [headerTitle, setHeaderTitle] = useState("WhoAmi?");
  const [inputState, setInputState] = useState();

  const headerRef = useRef();
  const carouselref = useRef();

  return (
    <div className="body">
      <h1 ref={headerRef}>{headerTitle}</h1>
      <form onSubmit={setTitle}>
        <label>Change header </label>
        <input type="text" onChange={handleInputChange} />
        <button>Set</button>
      </form>

      <div className="carousel" ref={carouselref}>
        <div className="wrapper">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, et
            reprehenderit. Excepturi aut distinctio quia expedita! Eveniet
            deserunt dignissimos dicta rem laudantium inventore itaque.
            Repudiandae recusandae magnam deserunt autem repellendus.
          </p>
        </div>
      </div>
      <div className="carousel__buttons">
        <button className="btn" onClick={() => moveRef(carouselref, "right")}>
          {"<"}
        </button>
        <button className="btn" onClick={() => moveRef(carouselref, "left")}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default WhoAmi;
