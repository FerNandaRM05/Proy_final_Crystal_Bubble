import { IonHeader, IonIcon, IonImg } from "@ionic/react";
import { language } from "ionicons/icons";

export const Header:React.FC = () => {
    return(
        <IonHeader>
            <IonImg className="img" src="./img/logo.png" />
            <IonIcon icon={language}/>
        </IonHeader>
    );
};