import React from "react";
import "../styles/footer.sass";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const footer = () => {
  return (
    <>
      <footer>
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
      </footer>
      <div className="copyright">
        <h4>
          &copy; Copyright 2023
        </h4>
      </div>
    </>
  );
};
export default footer;
