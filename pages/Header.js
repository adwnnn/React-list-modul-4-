import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";


const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
  navbar: {
    justifyContent: "center",
    width: "100%",
    margin: "auto",
    display: "flex",
    lineHeight: "80px",
    position: "sticky",
    top: "0",
    zIndex: "100",
    fontFamily: "sans-serif", 
  },
  logo: {
    fontFamily: "sans-serif", 
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#444",
  },
  navLinks: {
    display: "flex",
    gap: "50px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif", 
  },
};

class Header extends React.Component {
  render() {
    return (
      <div style={styles.navbar}>
        
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>
            Beranda
          </Link>
          <Link to="/TentangSaya" style={styles.link}>
            Tentang Saya
          </Link>
          <Link to="/Karya" style={styles.link}>
            Karya
          </Link>
          <Link to="/Contact" style={styles.link}>
            Kontak
          </Link>
          <Link to="/Gallery" style={styles.link}>
            Gallery

          </Link>
          <Link to="/Cart" style={styles.link}>
            Cart
          </Link>
        </div>

      </div>
    );
  }
}

export default Header;