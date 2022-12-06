import { IonHeader, IonIcon, IonImg } from "@ionic/react";
import SettingComponent from "../animations/SettingsComponents";
import Switch from "../animations/Switch";
import ContOptionsSettings from "./ContOptionsSettings";

import './Header.css';

export const Header:React.FC = () => {
    return(
        <IonHeader className="header">
            <ContOptionsSettings />
            <IonImg className="img" src="./img/logo2.png" />
            <SettingComponent />
        </IonHeader>
    );
};