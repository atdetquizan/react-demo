import React from 'react';
import { useFirebaseApp, useFirestoreCollection } from 'reactfire';

import 'firebase/firestore';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const firebaseApp = useFirebaseApp();
  const videosRef = firebaseApp.firestore().collection('videos');
  const videos = useFirestoreCollection(videosRef).docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>{video.title}</li>
      ))}
    </ul>
  );
};
