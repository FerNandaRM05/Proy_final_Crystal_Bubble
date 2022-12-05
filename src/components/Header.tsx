import { IonHeader, IonIcon, IonImg } from "@ionic/react";
import Switch from "../animations/Switch";

import './Header.css';

export const Header:React.FC = () => {
    return(
        <IonHeader className="header">
            <IonImg className="img" src="./img/logo2.png" />
            <Switch />
        </IonHeader>
    );
};