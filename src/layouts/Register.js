import React, { useState } from "react";
import axios from 'axios';

function Register() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {usuario, senha};

    try {
      const response = await axios.post('https://wild-cyan-elephant-suit.cyclic.app/register', user);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteUsers = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/deleteAll');
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register-wrapper">
      <form onSubmit={handleRegister}>
        <label>
          Usuário:
          <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
        </label>
        <input type="submit" value="Register" />
      </form>
      <button onClick={handleDeleteUsers}>Deletar todos os usuários</button>
    </div>
  );
}

export default Register;
