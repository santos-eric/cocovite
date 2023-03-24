import React from "react";
import "../styles/footer.sass";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const footer = () => {
  return (
    <>
      <footer>
        <div className="title">
          <h1>Follow Us</h1>
        </div>
        <div className="icons">
          <a
            href="https://www.tiktok.com/@coco.lokoep?lang=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiTiktok size="30" className="icon" />
          </a>

          <a
            href="https://www.facebook.com/CocolokoElPaso/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookSquare size="30" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/coco.lokoep/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram size="30" className="icon" />
          </a>
        </div>
      </footer>
      <div className="copyright">
        <h4>
          &copy; Copyright 2023 | Crafted By
          <a
            href="https://www.linkedin.com/in/ericsantos01/"
            target="_blank"
            rel="noreferrer noopener"
          >
            - Eric Santos
          </a>
        </h4>
      </div>
    </>
  );
};
export default footer;
