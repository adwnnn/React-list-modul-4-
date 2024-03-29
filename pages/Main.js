import React from 'react';
import { Link } from 'react-router-dom';

const link = document.createElement('link');
document.head.appendChild(link);


const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Poppins, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '32px',
      marginBottom: '10px',
      color: '#646',
    },
    subtitle: {
      fontSize: '18px',
      color: '#666',
    },
    content: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    sectionContent: {
      fontSize: '16px',
      color: '#666',
    },
    gallery: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: "#EADBC8",
      color: '#black',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      borderTop: '1px solid #ccc',
      paddingTop: '20px',
    },
    footerText: {
      fontSize: '14px',
      color: '#666',
    },
  };

class Main extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Selamat Datang di Portofolio Saya</h1>
          
        </header>
        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Tentang Saya</h2>
          <p style={styles.sectionContent}>
            Saya sedang menempuh pendidikan di SMK Telkom Malang dengan jurusan Rekayasa Perangkat Lunak
          </p>
        </section>

        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Contact Me</h2>
          <div style={styles.gallery}>
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
              <button style={styles.button}>Hubungi Saya</button>
            </Link>
          </div>

         
        </section>
        
      </div>
    );
  }
}

export default Main;