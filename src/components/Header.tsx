import { IonHeader, IonIcon, IonImg } from "@ionic/react";
import { language } from "ionicons/icons";
import './Header.css';

export const Header:React.FC = () => {
    return(
        <IonHeader className="header">
            <IonImg className="img" src="./img/logo2.png" />
            <IonImg className="img2" src="./icon/language.svg" />
        </IonHeader>
    );
};