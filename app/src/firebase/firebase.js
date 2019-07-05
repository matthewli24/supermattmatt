import firebase from './config';

class Firebase {
  constructor() {
    this.firestore = firebase.firestore();
  }

  //POST A COMMENT ENTRY
  addComment = (username, comment) => {
    let commentId = this.firestore.collection("comments").doc().id;
    return (
      this.firestore.collection("comments").add({
        username: username,
        comment: comment,
        id: commentId,
        timestamp: Date.now()
      })
    ) 
  };

  //GET ALL COMMENTS
  getComments = () => {
    return this.firestore.collection("comments").orderBy("timestamp", "desc");
  }


}; 

export default Firebase;