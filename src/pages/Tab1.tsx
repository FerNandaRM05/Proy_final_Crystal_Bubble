<<<<<<< HEAD
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Estatic from "./Estatic";
import React from 'react';
import Contacto from "./Contacto";
const Tab1: React.FC = () => {
  return (
    <IonPage className='contenido'>
      <IonContent fullscreen className='marg'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Contenido estático" />
        <Contacto/>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
=======
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Estatic from "./Estatic";
import React from 'react';
import Contacto from "./Contacto";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='marg'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Contenido estático" />
        <Contacto/>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
>>>>>>> 5f9c2d3a077e51ae0235c1b3347daf36a5da60b4
