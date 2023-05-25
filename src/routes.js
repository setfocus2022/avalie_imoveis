/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Grafico from "views/Grafico.js";
import Certificados from "views/Certificados.js";
import Catalogo from "views/Catalogo.js";


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
    path: "/user",
    name: "Perfil de Usuário",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
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
