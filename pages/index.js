import React, { useState } from 'react';

const LoginForm = () => {
  return (
    <div className="login-form-container">
   
      <div className="login-form">
      <img
        src="https://drive.google.com/file/d/1_qeHkIjATx8mfkibeiW60xGQlMksNzzn/view?usp=sharing"
        alt="Imagen de inicio de sesión"
        className="centered-image"
      />
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
      <style jsx>{`
        .login-form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .centered-image {
          max-width: 100%;
        }

        .login-form {
          max-width: 300px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h2 {
          text-align: center;
        }

        .form-group {
          margin: 10px 0;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 5px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
