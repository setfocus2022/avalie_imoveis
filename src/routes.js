
import Dashboard from "views/Dashboard.js";
import Treinamentos from "views/Treinamentos.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Grafico from "views/Grafico.js";
import Certificados from "views/Certificados.js";
import Catalogo from "views/Catalogo.js";
import Resultados from "views/Resultados.js";
import Compras from "views/Compras.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "QS Back-End",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    roles: ['Teste', 'Administrador', 'Visualizador']
  },

  {
    path: "/Graficos",
    name: "Graficos Power BI",
    icon: "nc-icon nc-chart-bar-32",
    component: Grafico,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
  {
    path: "/Resultados",
    name: "Resultados",
    icon: "nc-icon nc-paper-2",
    component: Resultados,
    layout: "/admin",
    roles: ['Administrador']
  },
  {
    path: "/treinamentos",
    name: "Treinamentos",
    icon: "nc-icon nc-circle-09",
    component: Treinamentos,
    layout: "/admin",
    roles: ['Administrador']
  },
  {
    path: "/table",
    name: "CheckList's",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    roles: ['Administrador']

  },

  {
    path: "/maps",
    name: "Mapa de Rede",
    icon: "nc-icon nc-map-big",
    component: Maps,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
  {
    path: "/certificados",
    name: "Certificados",
    icon: "nc-icon nc-single-copy-04",
    component: Certificados,
    layout: "/admin",
    roles: ['Administrador']
  },
  {
    path: "/catalogo_ead",
    name: "Catalogo EAD",
    icon: "nc-icon nc-ruler-pencil",
    component: Catalogo,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
  {
    path: "/Compras",
    name: "Pendência de Compra",
    icon: "nc-icon nc-money-coins",
    component: Compras,
    layout: "/admin",
    roles: ['Administrador', 'Visualizador']
  },
];


export default dashboardRoutes;
