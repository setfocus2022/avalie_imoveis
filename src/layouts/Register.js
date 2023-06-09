import React, { useState } from "react";
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Aqui vai o código para enviar uma requisição para a API para registrar o usuário

    const user = {email, senha};

    try {
      const response = await axios.post('http://localhost:5000/register', user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register-wrapper">
      <form onSubmit={handleRegister}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          senha:
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />

        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
