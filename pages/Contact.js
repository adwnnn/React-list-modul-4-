import React from 'react';

const link = document.createElement('link');
document.head.appendChild(link);

const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      maxWidth: '500px', 
      margin: 'auto', 
      marginTop: '50px', 
      fontFamily: "Poppins, sans-serif"
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      marginBottom: '10px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      marginBottom: '10px',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: "#F9B5AC",
      color: '#red',
      cursor: 'pointer',
    },
  };

class Contact extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h2>Hubungi Kami</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="nama" style={styles.label}>Nama:</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan nama Anda" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email Anda" style={styles.input} required />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;