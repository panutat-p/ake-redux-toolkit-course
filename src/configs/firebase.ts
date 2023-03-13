import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAY6QGqvBnxbnbFtZqv-rutTaGQfV2R8jg',
  authDomain: 'ake-redux-toolkit-course.firebaseapp.com',
  projectId: 'ake-redux-toolkit-course',
  storageBucket: 'ake-redux-toolkit-course.appspot.com',
  messagingSenderId: '235361509226', // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  appId: '1:235361509226:web:20b91ba319c3c2ad7b4f13',
  measurementId: 'G-9P56LMYBBS',
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
