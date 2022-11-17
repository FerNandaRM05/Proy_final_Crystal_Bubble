import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonButton,
  IonSlides,
  IonSlide,
  IonIcon,
  IonList,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { playCircleOutline, logoInstagram, logoWhatsapp } from 'ionicons/icons';
import { Header } from '../components/Header';

const Tab2: React.FC = () => {

  const slideOpts = {
    initialSlide: 0,
    speed: 2500,
    autoplay: true
  };

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true}>
        <IonSlides pager={true} options={slideOpts}>

          <IonSlide>
            <IonCardContent className='slider_uno'>
              <IonCardTitle className='title'>Tu talla en tu estilo</IonCardTitle>
              
{/*               <IonList>
                <IonIcon size="large" icon={playCircleOutline} />
                <IonIcon size="large" icon={logoInstagram} />
                <IonIcon size="large" icon={logoWhatsapp} />
              </IonList> */}

            </IonCardContent>
          </IonSlide>

          <IonSlide>
            <IonCardContent className='slider_dos'>
              <IonCardTitle className='title'>Mas que nada Compromiso</IonCardTitle>
            </IonCardContent>
          </IonSlide>

          <IonSlide>
            <IonCardContent className='slider_tres'> 
              <IonCardTitle className='title'>Asesorarte en Moda</IonCardTitle>
            </IonCardContent>
          </IonSlide>
            
          <IonSlide>
            <IonCardContent className='slider_cuatro'>
              <IonCardTitle className='title'>Una Caja Muchos Momentos</IonCardTitle>
            </IonCardContent>
          </IonSlide>

        </IonSlides>

        {/* <ExploreContainer name="Tab 2 page" /> */}
        <h1>MODA CRYSTAL BUBBLE TENDENCIAS PRÊT-À-PORTER</h1>
        <div className='section'>
          <IonCard className='card1'>
            <IonImg src='./img/card2.webp' />
            <IonCardContent >
              <IonCardTitle>MUJER PETITE</IonCardTitle>
              <IonLabel>Viste elegante y combina a tu aire</IonLabel>
            </IonCardContent>
          </IonCard>
          <IonCard className='card2'>
            <IonImg src='./img/card1.webp' />
            <IonCardContent>
              <IonCardTitle>MUJER PETITE</IonCardTitle>
              <IonLabel>Viste elegante y combina a tu aire</IonLabel>
            </IonCardContent>
          </IonCard>
          <IonCard className='card3'>
            <IonImg src='./img/card3.webp' />
            <IonCardContent>
              <IonCardTitle>MUJER PETITE</IonCardTitle>
              <IonLabel>Viste elegante y combina a tu aire</IonLabel>
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

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
