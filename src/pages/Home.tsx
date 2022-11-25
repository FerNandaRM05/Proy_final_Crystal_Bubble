import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonImg,
  IonPage,
  IonButton,
  IonSlides,
  IonSlide,
  IonCardHeader,
  IonRouterLink,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Header } from '../components/Header';

const Tab2: React.FC = () => {

  const slideOpts = {
    initialSlide: 0,
    speed: 2500,
  };

  return (
    <IonPage>
      <Header />
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
        <div className='banner'>
          <IonCard color={'primary'}>
            <IonCardContent>
              <IonCardTitle>
                TU CÓMPLICE PERFECTA PARA SORPRENDER
              </IonCardTitle>
              ¿Sabes cuánto puede cambiar el día de alguien con una sorpresa así?
            </IonCardContent>
            <IonButton fill="clear" color={'tertiary'}>Action 1</IonButton>
          </IonCard>
        </div>

        {/* Seccion (Escige tu outfit perfecto) */}

        <IonCardContent>
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
                  25,00€
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
                  41,00€
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
                  59,00€
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
                  59,00€
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

        {/* Seccion de Boutique */}

        <IonCardContent>
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

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
