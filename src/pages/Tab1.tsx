import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {


  const divStyle: object = {
    display: "flex",
    width: "100%",
    height: "100%"
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >Articles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Articles</IonTitle>
          </IonToolbar>
        </IonHeader>
        <iframe src="https://wisportsheroics.com/" title="wiSportsIframe" style={divStyle}></iframe>
    </IonContent>
    </IonPage >
  );
};

export default Tab1;
