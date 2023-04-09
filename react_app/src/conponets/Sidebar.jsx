import Avatar from "../img/eu.jpg";

import '../styles/conponets/sidebar.sass';

import SocialNetworks from "./SocialNetworks";


const Sidebar = () => {
  return <aside id="sidebar"> 
  <img src= {Avatar} alt="Isaac Gabriel" />
  <p className="title">desenvolvedor</p>
  <SocialNetworks />
  <p>informacoes de contato</p>
  
  <a href="" className="btn">download curriculo</a>
  </aside>;
};

export default Sidebar