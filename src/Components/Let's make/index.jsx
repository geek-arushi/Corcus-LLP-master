import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Letmake = () => {
  const styles = {
    container: {
      backgroundColor: '#f0f0f0',
      borderRadius: '0.5rem',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1024px',
      width: '100%',
    },
    button: {
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '2rem',
      padding: '0.5rem 1rem',
      border: 'none',
      cursor: 'pointer',
    },
    image: {
      width: '100px',
      height: '100px',
    },
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-50">
      <div style={styles.container}>
        <div>
          <h4 className="font-weight-bold mb-4">Let's Make Things Happen</h4>
          <p className="text-muted mb-4">
            Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!
          </p>
          <a href="/contact" target="_blank" rel="noopener noreferrer" style={styles.button}>
            Get your free proposal
          </a>
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/a1aa/image/Ys_vGPY_W1wgl5oOpwwHsbp3F96g3bUkp_XtirJikm8.jpg"
            alt="Illustration of chat bubbles with yellow highlights"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Letmake;
