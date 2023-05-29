
import Dashboard from "views/Dashboard.js";
import Treinamentos from "views/Treinamentos.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Grafico from "views/Grafico.js";
import Certificados from "views/Certificados.js";
import Catalogo from "views/Catalogo.js";
import Resultados from "views/Resultados.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "QS Back-End",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/Graficos",
    name: "Graficos Power BI",
    icon: "nc-icon nc-chart-bar-32",
    component: Grafico,
    layout: "/admin"
  },
  {
    path: "/Resultados",
    name: "Resultados",
    icon: "nc-icon nc-paper-2",
    component: Resultados,
    layout: "/admin"
  },
  {
    path: "/treinamentos",
    name: "Treinamentos",
    icon: "nc-icon nc-circle-09",
    component: Treinamentos,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "CheckList's",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/maps",
    name: "Mapa de Rede",
    icon: "nc-icon nc-map-big",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/certificados",
    name: "Certificados",
    icon: "nc-icon nc-single-copy-04",
    component: Certificados,
    layout: "/admin"
  },
  {
    path: "/catalogo_ead",
    name: "Catalogo EAD",
    icon: "nc-icon nc-ruler-pencil",
    component: Catalogo,
    layout: "/admin"
  }

];

export default dashboardRoutes;
