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
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Contenido estático" />
        <Contacto/>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
