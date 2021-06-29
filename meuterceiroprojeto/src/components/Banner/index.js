import React from "react";
import Img from "../../assets/imagem4.svg";

import "./styles.css";
const Banner = () => {
  return (
    <div className="main">
      <div>
        <h1>Aprendendo React </h1>
        <p>
          App divertido feito em React para treinar react-router-dom e axios{" "}
        </p>
        <h2>⚛️</h2>
      </div>
      <img src={Img} alt="ilustracao com logo da estudante" />
    </div>
  );
};
export default Banner;
