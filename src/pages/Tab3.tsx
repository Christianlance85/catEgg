import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { currentUser } from '../lib/pocketbase';

const Tab3: React.FC = () => {
  console.log(currentUser)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chatroom</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chatroom</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form></form>
        <ExploreContainer name="Chatrooms page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
