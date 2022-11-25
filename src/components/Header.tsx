import { IonHeader, IonIcon, IonImg } from "@ionic/react";

import './Header.css';

export const Header:React.FC = () => {
    return(
        <IonHeader className="header">
            <IonImg className="img" src="./img/logo2.png" />
        </IonHeader>
    );
};