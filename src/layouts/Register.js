import React, { useState } from "react";
import axios from 'axios';
import styles from './Register.module.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [empresa, setEmpresa] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-avalie.onrender.com/register', {
        email,
        senha,
        empresa,
      });

      if (response.data.success) {
        alert("Usuário registrado com sucesso!");
        setEmail("");
        setSenha("");
        setEmpresa("");
      } else {
        alert("Erro ao registrar usuário.");
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Ocorreu um erro ao registrar o usuário. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.title}>
            Registrar Usuário
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Registrar
            </button>
          </form>
        </div>
      </div>
      {/* Adicione aqui o código JSX para a parte direita do seu componente, 
          como a tabela de usuários ou qualquer outro elemento que você precise. */}
    </div>
  );
};

export default Register;