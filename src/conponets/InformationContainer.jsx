import '../styles/conponets/InformationContainer.sass'

import { AiFillInstagram, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        
        <div>
          <h3>Instagram</h3>
          <p>@isaac.gabriel02</p>
        </div>
      </div>
      <div className="info-card">
       
        <div>
          <h3>E-mail</h3>
          <p>codebiisaac@</p>
        </div>
      </div>
      <div className="info-card">
    
        <div>
          <h3>Localização</h3>
          <p>Contagem / MG</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
