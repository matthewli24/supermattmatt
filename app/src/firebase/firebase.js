import firebase from './config';

class Firebase {
  constructor() {
    this.firestore = firebase.firestore();
  }

  //POST comment entry
  addComment = (username, comment) => {
    return (
      this.firestore.collection("comments").add({
        username: username,
        comment: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    ) 
  };


}; 

export default Firebase;