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
      <IonContent fullscreen={true} >

        {/* Slider Principal */}
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/comunidad-moda/'>
              <IonCardContent className='slider_uno'>
                <IonCardTitle className='title'>TU TALLA EN TU ESTILO</IonCardTitle>
              </IonCardContent>
            </IonRouterLink>
          </IonSlide>

          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/categorias/accesorios/bisuteria/'>
              <IonCardContent className='slider_dos'>
                <IonCardTitle className='title'>MAS QUE NADA COMPROMISO</IonCardTitle>
              </IonCardContent>
            </IonRouterLink>
          </IonSlide>

          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/asesoramiento/'>
              <IonCardContent className='slider_tres'>
                <IonCardTitle className='title'>ASESORARTE EN MODA</IonCardTitle>
              </IonCardContent>
            </IonRouterLink>
          </IonSlide>

          <IonSlide>
            <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/moda-curvy/caja-sorpresa-ropa/'>
              <IonCardContent className='slider_cuatro'>
                <IonCardTitle className='title'>UNA CAJA MUCHOS MOMENTOS</IonCardTitle>
              </IonCardContent>
            </IonRouterLink>
          </IonSlide>
        </IonSlides>

        {/* Contenido Segundario */}
        <IonCardHeader className='ion-text-center'>
          <IonCardTitle>MODA CRYSTAL BUBBLE TENDENCIAS PR??T-??-PORTER</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className='section'>

          <IonCard className='card1 tnd1'>
            <IonCardContent className='ion-text-center'>
              <IonCardTitle color='secondary-contrast' >MUJER PETITE</IonCardTitle>
              <IonButton size='small' href='https://crystalbubbleshop.com/categorias/moda-petite/' shape='round'>Ver mas</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className='card2 tnd'>
            <IonCardContent className='ion-text-center'>
              <IonCardTitle color='secondary-contrast'>EXCLUSIVAS</IonCardTitle>
              <IonButton href='https://crystalbubbleshop.com/categorias/mis-especiales/' shape='round'>Ver mas</IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className='card3 tnd2'>
            <IonCardContent className='ion-text-center'>
              <IonCardTitle color='secondary-contrast'>MUJER CURVY</IonCardTitle>
              <IonButton size='small' href='https://crystalbubbleshop.com/categorias/moda-curvy/' shape='round'>Ver mas</IonButton>
            </IonCardContent>
          </IonCard>

        </IonCardContent>
        <IonCardContent className='banner dv'>
          <IonCard color={'primary'}>
            <IonCardContent>
              <IonCardTitle>
                TU C??MPLICE PERFECTA PARA SORPRENDER
              </IonCardTitle>
              <IonCardSubtitle>
                ??Sabes cu??nto puede cambiar el d??a de alguien con una sorpresa as???
              </IonCardSubtitle>
            </IonCardContent>
            <IonButton fill="outline" color={'light'} >CRYSTALBOX</IonButton>
          </IonCard>
        </IonCardContent>

        <IonCardContent className='sectionTwo dv'>
          <IonCardTitle className='title'>MODA PR??T-??-PORTER</IonCardTitle>
          <IonGrid>
            <IonRow>
              <IonCol className='card4 imgCol'></IonCol>
              <IonCol className='col-txt'>
                <IonCardSubtitle>PIDE CRYSTALBOX</IonCardSubtitle>
                Ind??canos el n??mero de prendas o tu rango de precio
                Escoge un color y deja el resto en nuestras manos
                <IonCardSubtitle> CADA CrystalBox ES ??NICA</IonCardSubtitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className='col-txt'>
                Mar??a quer??a disfrutar de una compra diferente, y con <b>CrystalBox</b> la encontr??
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
            <IonButton
              fill='outline'
              href='http://crystalbubbleshop.com/caja-sopresa-crystalbox/'
              color={'dark'}>CRYSTAL BOX 35???</IonButton>
          </IonCard>
        </IonCardContent>

        <IonCardContent className='banner dv'>
          <IonCard color={'primary'}>
            <IonCardContent>
              <IonCardTitle>??LISTA PARA VESTIR MEJOR QUE NUNCA</IonCardTitle>
            </IonCardContent>
            <IonButton href='' fill="outline" color={'light'}>CONOCENOS</IonButton>
          </IonCard>
        </IonCardContent>

        <IonCardContent className='sectionThree'>
          <IonCardTitle className='title'>Asesorate y  Tranforma tu Imagen</IonCardTitle>

          <IonCardContent className='Asr'>
            <IonCardContent className='asr1'>
              <IonCard color={'light'} className='card6'>ASESORAMIENTO EN MODA</IonCard>
              <IonButton
                href='https://crystalbubbleshop.com/asesoramiento/'>Pedir Cita</IonButton>
            </IonCardContent>

            <IonCardContent className='asr2'>
              <IonCard color={'light'} className='card7'>TRANSFORMA TU IMAGEN</IonCard>
              <IonButton href='https://crystalbubbleshop.com/asesoramiento/'
              >Reservar</IonButton>
            </IonCardContent>
          </IonCardContent>
        </IonCardContent>

        <IonCardContent className='banner dv'>
          <IonCard color={'primary'}>
            <IonCardContent>
              <IonCardTitle>APROVECHA LO MEJOR DE SER PARTE DE LA COMUNIDAD</IonCardTitle>
              <IonCardSubtitle>Recibe descuentos de hasta -80% personalizados e invitaciones a sesiones de venta y asesoramiento ??nicas</IonCardSubtitle>
            </IonCardContent>
            <IonButton
              href='https://crystalbubbleshop.com/comunidad-moda/'
              fill='outline'
              color={'light'}>SOLICITA INVITACI??N</IonButton>
          </IonCard>
        </IonCardContent>
        {/* slider */}
        <IonCardContent>
          <IonCardContent className='dv'>
            <IonCardTitle>ESCOGE TU OUTFIT PERFECTO</IonCardTitle>
            <IonCardSubtitle>MODA Y ASESORAMIENTO</IonCardSubtitle>
            <IonSlides pager={true} options={slideOpts}>

              <IonSlide>
                <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/accesorios/bisuteria/colgante-plumas-naturales/'>
                  <IonCardContent className='oft1 oft'>
                    <IonCardTitle>
                      COLGANTE PLUMAS NATURALES
                    </IonCardTitle>
                    <IonCardSubtitle color='secondary-contrast'>
                      25,00???
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonRouterLink>
              </IonSlide>

              <IonSlide>
                <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/accesorios/bisuteria/collar-rojo/'>
                  <IonCardContent className='oft2 oft'>
                    <IonCardTitle>
                      COLLAR ROJO
                    </IonCardTitle>
                    <IonCardSubtitle color='secondary-contrast'>
                      41,00???
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonRouterLink>
              </IonSlide>

              <IonSlide>
                <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/accesorios/bisuteria/conjunto-ojo-de-tigre/'>
                  <IonCardContent className='oft3 oft'>
                    <IonCardTitle>
                      CONJUNTO OJO DE TIGRE
                    </IonCardTitle>
                    <IonCardSubtitle color='secondary-contrast'>
                      59,00???
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonRouterLink>
              </IonSlide>
              <IonSlide>
                <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/accesorios/bisuteria/colgante-y-pulsera-turquesa/'>
                  <IonCardContent className='oft4 oft'>
                    <IonCardTitle>
                      PULSERA TURQUESA
                    </IonCardTitle>
                    <IonCardSubtitle color='secondary-contrast'>
                      59,00???
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonRouterLink>
              </IonSlide>
              <IonSlide>
                <IonRouterLink href='https://crystalbubbleshop.com/coleccion-mujer/moda-curvy/caja-sorpresa-moda-asesoramiento/'>
                  <IonCardContent className='oft5 oft'>
                  </IonCardContent>
                </IonRouterLink>
              </IonSlide>
            </IonSlides>
          </IonCardContent>

          {/* show boutique */}
          <IonCardContent className=''>
            <IonCardTitle>BOUTIQUE SHOWROOM ONLINE</IonCardTitle>
            <IonButton href='https://crystalbubbleshop.com/categorias/prendas/'>SHOP NOW</IonButton>
            <IonGrid>
              <IonRow className='bshow'>
                <IonCol>
                  <IonRouterLink href='https://crystalbubbleshop.com/categorias/prendas/'>
                    <IonCardContent className='bshow1'></IonCardContent>
                  </IonRouterLink>
                  <IonRouterLink href='https://crystalbubbleshop.com/categorias/complementos/bolsos/'>
                    <IonCardContent className='bshow2'></IonCardContent>
                  </IonRouterLink>
                </IonCol>
                <IonCol>
                  <IonRouterLink href='https://crystalbubbleshop.com/categorias/accesorios/bisuteria/'>
                    <IonCardContent className='bshow3'></IonCardContent>
                  </IonRouterLink>
                  <IonRouterLink href='https://crystalbubbleshop.com/categorias/complementos/fulares-chales/'>
                    <IonCardContent className='bshow4'></IonCardContent>
                  </IonRouterLink>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCardContent>


      </IonContent>

    </IonPage>
  );
};

export default Tab2;
