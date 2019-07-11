import React, { Component } from 'react';
import KittyIcon from '../../assets/icons/cat-profile-100.png';
import './comments.scss';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      page: 1,
      previousDoc: null
    };
  }

  componentDidMount() {
    this.props.firebase.getComments()
    .onSnapshot(snapshot => {
      
      console.log("*************************************")
      snapshot.docChanges().forEach(change => {

        if (change.type === "added") {
            console.log("Added: ", change.doc.data());
            let addedTimestamp = change.doc.data().timestamp;
            if(this.state.comments.length === 0 || addedTimestamp < this.state.comments[0].timestamp ) {
              this.setState({
                comments: [...this.state.comments, change.doc.data()]
              })
            }
            if(addedTimestamp > this.state.comments[0].timestamp ){
              this.setState({
                comments: [change.doc.data(), ...this.state.comments]
              })
            } 
        }
        if (change.type === "modified") {
            console.log("Modified: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed: ", change.doc.data());
            let removedId = change.doc.data().id;
            let newComments = this.state.comments.filter(comment => comment.id !== removedId);
            this.setState({
              comments: newComments
            })
        }
      });
    })
  }//componentDidMount

  render () {
    const comments = this.state.comments.map(comment =>{
      return (
        <div className="commentRow" key={comment.id}> 
          <img className="commentIcon" src={KittyIcon} alt="userIcon"/>
          <div className="commentsContent">{comment.username} said : {comment.comment}</div>
        </div>
      )
    })

    return (
      <div className="commentsWrapper">

        <div className="commentsLabel"> What is Everyone Saying? </div>

        <div className="commentsTable">
          {comments} 
        </div>

      </div>
    )
  }
}

export default Comments;
