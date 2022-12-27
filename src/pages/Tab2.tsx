import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import YouTube from 'react-youtube';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Podcasts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Podcasts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <YouTube
          opts={{ width: "100%", height: "40%" }}
          style={{ width: "100%", height: "100%" }}
          videoId="XTV3lO5w6aE"
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
        {/* <ExploreContainer name="Podcasts page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
