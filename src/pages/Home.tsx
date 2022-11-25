import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonLabel,
  IonImg,
  IonPage,
  IonButton,
  IonSlides,
  IonSlide,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonCardHeader,
  IonItem,
  IonRouterLink,
} from '@ionic/react';

import { Route } from 'react-router-dom';

import './Home.css';
import { Header } from '../components/Header';
import { IonReactRouter } from '@ionic/react-router';

import Contacto from './Contacto'; 

const Tab2: React.FC = () => {

  const slideOpts = {
    initialSlide: 0,
    speed: 2500,
  };

  return (
    <IonPage>
      <Header />
      <IonReactRouter>
        <Route exact path={'/contactos'}>
          <Contacto/>
        </Route>
      </IonReactRouter>
      <IonContent fullscreen={true}>

        {/* Slider Principal */}
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
          <IonRouterLink href='https://crystalbubbleshop.com/comunidad-moda/'>
            <IonCardContent className='slider_uno'>
              <IonCardTitle className='title'>Tu talla en tu estilo</IonCardTitle>
            </IonCardContent>
          </IonRouterLink>
          </IonSlide>

          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/categorias/accesorios/bisuteria/'>
            <IonCardContent className='slider_dos'>
              <IonCardTitle className='title'>Mas que nada Compromiso</IonCardTitle>
            </IonCardContent>
            </IonRouterLink>
          </IonSlide>

          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/asesoramiento/'>
            <IonCardContent className='slider_tres'>
              <IonCardTitle className='title'>Asesorarte en Moda</IonCardTitle>
            </IonCardContent>
            </IonRouterLink>
          </IonSlide>

          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/moda-curvy/caja-sorpresa-ropa/'>
            <IonCardContent className='slider_cuatro'>
              <IonCardTitle className='title'>Una Caja Muchos Momentos</IonCardTitle>
            </IonCardContent>
            </IonRouterLink>
          </IonSlide>
        </IonSlides>

        {/* Contenido Segundario */}
        <IonCardHeader className='ion-text-center'>
          <IonCardTitle>MODA CRYSTAL BUBBLE TENDENCIAS PRÊT-À-PORTER</IonCardTitle>
        </IonCardHeader>
        <div className='section'>

          <IonCard className='card1'>
            <IonImg src='./img/card2.webp' />
            <IonCardContent className='ion-text-center'>
              <IonCardTitle>MUJER PETITE</IonCardTitle>
              <IonButton href='https://crystalbubbleshop.com/categorias/moda-petite/' shape='round'>Ver mas</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className='card2'>
            <IonImg src='./img/card1.webp' />
            <IonCardContent className='ion-text-center'>
              <IonCardTitle>EXCLUSIVAS</IonCardTitle>
              <IonButton href='https://crystalbubbleshop.com/categorias/mis-especiales/' shape='round'>Ver mas</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className='card3'>
            <IonImg src='./img/card3.webp' />
            <IonCardContent className='ion-text-center'>
              <IonCardTitle>MUJER CURVY</IonCardTitle>
              <IonButton href='https://crystalbubbleshop.com/categorias/moda-curvy/' shape='round'>Ver mas</IonButton>
            </IonCardContent>
          </IonCard>

        </div>
        <IonCardContent className='banner'>
          <IonCard color={'primary'}>
            <IonCardContent>
              <IonCardTitle>
                TU CÓMPLICE PERFECTA PARA SORPRENDER
              </IonCardTitle>
              ¿Sabes cuánto puede cambiar el día de alguien con una sorpresa así?
            </IonCardContent>
            <IonButton fill="outline">CRYSTALBOX</IonButton>
          </IonCard>
        </IonCardContent>

        <IonCardContent className='sectionTwo dv'>
          <IonCardTitle className='title'>MODA PRÊT-À-PORTER</IonCardTitle>
          <IonGrid>
            <IonRow>
              <IonCol className='card4 imgCol'></IonCol>
              <IonCol className='col-txt'>
              <IonCardSubtitle>PIDE CRYSTALBOX</IonCardSubtitle>
                Indícanos el número de prendas o tu rango de precio 
                Escoge un color y deja el resto en nuestras manos
              <IonCardSubtitle> CADA CrystalBox ES ÚNICA</IonCardSubtitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className='col-txt'>
                María quería disfrutar de una compra diferente, y con <b>CrystalBox</b> la encontró
              </IonCol>
              <IonCol className='card5 imgCol'></IonCol>
            </IonRow>
          </IonGrid>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>CAJA SORPRESA EN MODA</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle>Consigue CrystalBox</IonCardSubtitle>
              La caja sorpresa de moda para la mujer cosmopolita
            </IonCardContent>
            <IonButton fill='outline' color={'dark'}>CRYSTAL BOX 35€</IonButton>
          </IonCard>
        </IonCardContent>

        <IonCardContent className='banner dv'>
          <IonCard color={'primary'}>
            <IonCardContent>
              <IonCardTitle>¿LISTA PARA VESTIR MEJOR QUE NUNCA</IonCardTitle> 
            </IonCardContent>
            <IonButton fill="outline">CONOCENOS</IonButton>
          </IonCard>
        </IonCardContent>
        <IonCardContent className='sectionThree'> 
          <IonCardTitle className='title'>Asesorate y  Tranforma tu Imagen</IonCardTitle>
          <IonCardContent>
            <IonCard color={'light'} className='card6'>ASESORAMIENTO EN MODA</IonCard>
            <IonCard color={'light'} className='card7'>TRANSFORMA TU IMAGEN</IonCard>
          </IonCardContent>
          <IonCardContent>
            <IonButton>Pedir Cita</IonButton>
            <IonButton>Reservar</IonButton>
          </IonCardContent>
        </IonCardContent>
        <IonCardContent className='banner dv'>
              <IonCard color={'primary'}>
                <IonCardContent>
                  <IonCardTitle>APROVECHA LO MEJOR DE SER PARTE DE LA COMUNIDAD</IonCardTitle>
                  <IonCardSubtitle>Recibe descuentos de hasta -80% personalizados e invitaciones a sesiones de venta y asesoramiento únicas</IonCardSubtitle>
                </IonCardContent>
              <IonButton fill='outline'>SOLICITA INVITACIÓN</IonButton>
              </IonCard>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;