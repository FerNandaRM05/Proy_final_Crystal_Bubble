import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoInstagram, logoYoutube, logoTiktok, locationOutline } from 'ionicons/icons';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Estatic: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contáctanos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
            <div className='containerPhoto'>
            </div>
            <div className='containerContent'>
                <h1>CONTACTO</h1>
                <h2>ENVÍA MENSAJE</h2>
                <p>Contáctanos siempre que lo necesites. ¿Tienes alguna pregunta, necesitas algún consejo de moda o te gustaría hacer su pedido por teléfono? Si es así, nuestras Asesoras están aquí para ayudarte.</p>
                <p>Siempre que lo desees podrás dejarnos tu mensaje y solicitar servicios. Te contactemos a la mayor brevedad posible. Intentaremos responderte en un plazo máximo de 24 horas.</p>
                
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
                <div id='divRedes'>
                  <IonIcon icon={logoInstagram} />
                  <IonIcon icon={logoTiktok}/>
                  <IonIcon icon={logoYoutube}/>
                </div>
                <div id='divMapa'>
                  <p><IonIcon icon={locationOutline}/>
                    Rda. General Mitre, 126, 08021 Barcelona</p>

                  <img src="assets/imgs/map.png" alt="ubicacion de la tienda"/>
                </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Estatic;
