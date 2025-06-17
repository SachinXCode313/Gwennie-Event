import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDsUVbUqyPbEMCkBqGQ8tisL0v_cb7j_Io",
  authDomain: "gwennie-event.firebaseapp.com",
  projectId: "gwennie-event",
  storageBucket: "gwennie-event.firebasestorage.app",
  messagingSenderId: "501203441732",
  appId: "1:501203441732:web:f0531f2b1485e0ebd6c411"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);