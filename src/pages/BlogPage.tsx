import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import { Blog } from "../components/Blog";

const BlogPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>#TuBlog</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">#TuBlog</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Blog/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default BlogPage;