import './Style.css'
import React from "react";

function Footer() {
  return (
    <footer>
      <p>&copy; My Company {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
