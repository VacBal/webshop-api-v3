import React, { useState } from "react";


const LoginPage: React.FC = () => {
 
  return (
    <div className="login-container">
      <h1>Bejelentkezés</h1>
      <form >
        <div>
          <label htmlFor="username">Email:</label>
          <input
            
          />
        </div>
        <div>
          <label htmlFor="password">Jelszó:</label>
          <input
            
          />
        </div>
       
        <button type="submit" >
          
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
