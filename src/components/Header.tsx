import { IonAvatar, IonHeader, IonIcon, IonImg, IonToolbar } from "@ionic/react";

import './Header.css';

export const Header: React.FC = () => {
    return (
        <IonHeader className="header">
            <IonToolbar>
                    <IonImg className="img" slot="start" src="./img/logo2.png" /> 
            </IonToolbar>
        </IonHeader>
    );
};