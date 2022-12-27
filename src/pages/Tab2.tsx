import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
        <LiteYouTubeEmbed
          id="XTV3lO5w6aE"
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
        {/* <ExploreContainer name="Podcasts page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
