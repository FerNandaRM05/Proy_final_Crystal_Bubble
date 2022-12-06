import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {  home, chatbubbles, gridOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Home from './pages/Home';
import Tab3 from './pages/Tab3';
import Instrucciones from './pages/Modal/Instrucciones';
import { IonContent, IonPage, IonTitle, IonToolbar, IonApp, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import icono from "./img/icon.png";
import traducir from "./img/translate.png";
import "./App.css";
import Estatic from "./pages/Estatic";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useState } from 'react';
import BlogPage from './pages/BlogPage';

setupIonicReact();



const App: React.FC = () => {

  localStorage.setItem('user', 'Hola')
  const [help, setHelp] = useState(true)

  if (help) {
    return <Instrucciones 
    setHelp={setHelp}/>
  }

  return (<IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1/>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/tab3">
            <Estatic />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/instrucciones">
            <Instrucciones
              setHelp={setHelp}/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="contactos" href="/tab1">
            <IonIcon icon={chatbubbles} />
            <IonLabel>Contacto</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={gridOutline} />
            <IonLabel>Menú</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>)

}

export default App;
