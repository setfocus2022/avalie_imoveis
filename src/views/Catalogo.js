import React, { useState } from 'react';
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
import cursosData from './cursos.json';
import styles from './CursosEad.module.scss';

const Catalogo = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [searchResults, setSearchResults] = useState(cursosData);

 const handleSearch = (e) => {
 const searchTerm = e.target.value;
 setSearchTerm(searchTerm);

 if (searchTerm) {
 const filteredResults = cursosData.filter((curso) =>
 curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
 );
 setSearchResults(filteredResults);
 } else {
 setSearchResults(cursosData);
 }
 };

 return (
 <Container>
 <div className={styles.searchContainer}>
 <div className={styles['search-bar']}>
 <input
 type="text"
 placeholder="Pesquisar"
 value={searchTerm}
 onChange={handleSearch}
 />
 <div className={styles['search-icon']}></div>
 </div>
 </div>
 <div className={`${styles.treatments} ${styles.center}`}>
 {searchResults.map((curso) => (
 <div
 className={styles.treatmentsItem}
 data-aos="fade-up"
 key={curso.id}
 >
 <div className={styles.images}>
 <img
 src={curso.imageSrc}
 alt={curso.titulo}
 className={styles.image}
 width={250}
 height={137}
 />
 </div>
 <h3>{curso.titulo}</h3>
 <div className={styles.description}>
 <p>{curso.descricao}</p>
 </div>
 <div className={styles.courseInfo}>
  <div className={styles.courseInfoItem}>
    <p className={styles.courseInfoText}>Carga Horaria: {curso.carga_horaria}</p>
  </div>
  <div className={styles.courseInfoItem}>
    <p className={styles.courseInfoText}>Valor: {curso.valor}</p>
  </div>
</div>

 </div>
 ))}
 </div>
 </Container>
 );
};

export default Catalogo;
