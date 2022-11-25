import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import './Tab1.css';


import contraCancer from "./img/contra-cancer.webp";

const Estatic: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Estatico</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contenidos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <div className='containerContent'>
            <a href="https://crystalbubbleshop.com/la-marca/">
              <div id="corporate" className='tarjeta'>
              <p>La Marca</p>
              </div>
            </a>
            <a href="https://crystalbubbleshop.com/comunidad-moda/">
              <div id="comunidad" className='tarjeta' >
                <p>Comunidad moda</p>
              </div>
            </a>
            <a href="https://crystalbubbleshop.com/venta-privada/">
              <div id="ventaprivada" className='tarjeta'>
                <p>Venta privada</p>
              </div>
            </a>
            <a href="https://crystalbubbleshop.com/black-friday/">
              <div id="blackfriday" className='tarjeta'>
                <p></p>
              </div>
            </a>
            <a href="https://crystalbubbleshop.com/contra-el-cancer/">
              <div id="contracancer" className='tarjeta'>
                <p>Contra el cáncer</p>
              </div>
            </a>
            <a href="/blog">
              <div id="blog" className='tarjeta'>
                <p>Blog</p>
              </div>
            </a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Estatic;
