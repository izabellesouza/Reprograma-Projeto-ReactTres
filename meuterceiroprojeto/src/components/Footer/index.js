import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <p>Feito com carinho por Izabelle Souza</p>
          <p> Aluna Reprograma! Turma On10 2021</p>
          <p> Programando o mundo </p>
          <p> Redes Sociais </p>
        </div>

        <div className="redes-sociais">
          <a
            className="link_insta"
            href="https://www.instagram.com/souzaaizabelle/"
          >
            <img
              className="logo_insta"
              src="https://img.pngio.com/download-logo-instagram-free-png-transparent-image-and-clipart-transparent-instagram-logo-png-400_400.png"
              alt="logo instagram"
            />{" "}
          </a>

          <a
            className="link_insta"
            href="#"
          >
            {" "}
            <img
              className="logo_linke"
              src="https://image.flaticon.com/icons/png/512/49/49656.png"
              alt="logo linkedin"
            />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
