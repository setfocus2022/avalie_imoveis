import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styles from './Login.module.css';
import backgroundImage1 from './back1.gif';
import backgroundImage2 from './background-2.png';
import backgroundImage3 from './background-3.png';
import icon from './icone.png';
import logo2 from './logo 2.png';
import users from '../data/users.json';

const images = [backgroundImage1, backgroundImage2, backgroundImage3];

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === usuario && user.senha === senha);

    if (user) {
      localStorage.setItem('token', 'token_temporario');
      localStorage.setItem('role', user.role);
      localStorage.setItem('username', user.email);
      history.push('/admin/dashboard');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.title}>
            <img src={icon} alt="Icon" className={styles.icon} />
            Viva Imóveis | Avaliação de Imóveis
          </div>
          <form onSubmit={handleLogin} className={styles.form}>
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuário" className={styles.input} />
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className={styles.input} />
            <button type="submit" className={styles.button}>Login</button>
          </form>
          <p className={styles.p}><center>Painel desenvolvido por Check Mind Tecnologia| © 2024</center></p>
        </div>
      </div>

      <div className={styles.rightSide} style={{ backgroundImage: `url(${images[backgroundIndex]})` }}>
        <img src={logo2} alt="Logo 2" className={styles.watermark} />
      </div>
    </div>
  );
};

export default Login;