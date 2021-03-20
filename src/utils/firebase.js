import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDY9jXiFVauHxDaGhf5HLsrJOdOjDeXcbE",
  authDomain: "szp-test.firebaseapp.com",
  projectId: "szp-test",
  storageBucket: "szp-test.appspot.com",
  messagingSenderId: "876486477395",
  appId: "1:876486477395:web:08ccb3855a6c7a21cce8a6",
  measurementId: "G-09PWC1EMPN"
};

export const initApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

}

export const getHero = async () => {

const db = firebase.firestore();

const titlesRef = db.collection('titles');

const hero = await titlesRef.where('layoutOrder', '==', '0').get();
let heroTitles = [];
hero.forEach(doc => {
  heroTitles.push(doc.data());
});
return heroTitles
}

export const getCategroy = async (layoutOrder) => {

  const db = firebase.firestore();
  
  const titlesRef = db.collection('titles');
  
  const category = await titlesRef.where('layoutOrder', '==', `${layoutOrder}`).get();
  let categoryTitles = [];
  category.forEach(doc => {
    categoryTitles.push(doc.data());
  });
  return categoryTitles
  }
  

