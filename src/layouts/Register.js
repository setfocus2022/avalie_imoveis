import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './Register.module.css'; // Note que criamos um novo arquivo CSS para o Register
import backgroundImage1 from './background-1.png';
import backgroundImage2 from './background-2.png';
import backgroundImage3 from './background-3.png';
import icon from './icone.png'; // Importando o ícone
import logo2 from './logo 2.png'; // Importando o logo2

const images = [backgroundImage1, backgroundImage2, backgroundImage3];

function Register(props) {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [unidade, setUnidade] = useState("");
  const [setor, setSetor] = useState("");
  const [acesso, setAcesso] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {usuario, nome, email, senha, unidade, setor, acesso};

    try {
      const response = await axios.post('https://weak-erin-bighorn-sheep-gear.cyclic.app/register', user);
      console.log(response.data);

      if (response.data.success) {
        props.history.push('/admin/dashboard');
      } else {
        alert('Registro falhou');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.title}>
            <img src={icon} alt="Icon" className={styles.icon} />
            QSLib | QualitySEG
          </div>
          <form onSubmit={handleRegister} className={styles.form}>
            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Usuário" className={styles.input}/>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" className={styles.input}/>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className={styles.input}/>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" className={styles.input}/>
            <select type="text" value={unidade} onChange={e => setUnidade(e.target.value)} className={styles.input}>
              <option value="">Selecione...</option>
              <option value="Lençóis Paulista">Lençóis Paulista</option>
              <option value="Bauru">Bauru</option>
              <option value="Barcarena">Barcarena</option>
              <option value="Ribas">Ribas</option>
            </select>
            <input type="text" value={setor} onChange={e => setSetor(e.target.value)} placeholder="Setor" className={styles.input}/>
            <input type="text" value={acesso} onChange={e => setAcesso(e.target.value)} placeholder="Acesso" className={styles.input}/>
            <button type="submit" className={styles.button}>Register</button>
          </form>
        </div>
      </div>
      <div className={styles.rightSide} style={{backgroundImage: `url(${images[backgroundIndex]})`}}>
        <img src={logo2} alt="Logo 2" className={styles.watermark} /> {/* Adicionando o logo2 como marca d'água */}
      </div>
    </div>
  );
};

export default Register;
