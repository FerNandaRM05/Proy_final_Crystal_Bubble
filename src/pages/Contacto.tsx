import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoInstagram, logoYoutube, logoTiktok, locationOutline, logoLinkedin } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';
import { Header } from '../components/Header';


const Estatic: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        
        <div>
          <div className='containerContent'>
              <h1>CONTACTO</h1>
              <h2>ENVÍA MENSAJE</h2>
              <p>Contáctanos siempre que lo necesites. ¿Tienes alguna pregunta, necesitas algún consejo de moda o te gustaría hacer su pedido por teléfono? Si es así, nuestras Asesoras están aquí para ayudarte.</p>
              <p>Siempre que lo desees podrás dejarnos tu mensaje y solicitar servicios. Te contactemos a la mayor brevedad posible. Intentaremos responderte en un plazo máximo de 24 horas.</p>
              <div id='divFormulario'>
                <form action="" id='formulario'>
                  <div className='input'>
                    <label htmlFor='mail' className='labels'>Email</label>
                    <input name='mail' type="text"></input><br/>
                  </div>
                  <div className='input'>
                    <label htmlFor='nombre' className='labels'>Nombre y apellidos</label>
                    <input name='nombre' type="text"></input><br/>
                  </div>
                  <div className='input'>
                    <label htmlFor='movil' className='labels'>Móvil</label>
                    <input name='movil' type="number"></input><br/>
                  </div>
                  <div className='input'>
                    <label htmlFor='comentario' className='labels'>Añade tu comentario</label>
                    <input name='comentario' type="text"></input><br/>
                  </div>
                  <div id='enviar'>
                    <button>Enviar</button>
                  </div>
                </form>
                </div>
              <div id='divRedes'>
                <a href='https://www.instagram.com/crystalbubbleboutique/'><IonIcon icon={logoInstagram} /></a>
                <a href='https://www.tiktok.com/@crystalbubbleboutique'><IonIcon icon={logoTiktok}/></a>
                <a href='https://www.youtube.com/crystalbubbleboutique?sub_confirmation=1'><IonIcon icon={logoYoutube}/></a>
                <a href='https://www.linkedin.com/company/crystalbubbleboutique/'><IonIcon icon={logoLinkedin}/></a>
              </div>
              <div id='divMapa'>
                <p><IonIcon icon={locationOutline}/>
                  Rda. General Mitre, 126, 08021 Barcelona</p>
                <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.70288549737!2d2.1355920153981476!3d41.402258379262925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2805527f897%3A0x4db549902e2ae891!2sCRYSTAL%20BUBBLE%20Boutique%20%7C%20Moda%20Curvy%20%7C%20Moda%20Petite%20%7C%20Tallas%20Grandes%20Barcelona%20-%20Talles%20Grans%20Barcelona%20%7C%20Tallas%20Peque%C3%B1as!5e0!3m2!1ses!2ses!4v1668413661116!5m2!1ses!2ses" width="600" height="450" loading="lazy" ></iframe>
              
              </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Estatic;
