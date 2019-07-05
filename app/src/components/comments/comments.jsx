import React, { Component } from 'react';
import './comments.scss';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      page: 1
    };
  }

  componentDidMount() {
    this.props.firebase.getComments()
    .limit(this.state.page * 5)
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
  }

  render () {
    const comments = this.state.comments.map(comment =>{
      return (
        <tr key={comment.id}> 
          <td>{comment.username}</td>
          <td>{comment.comment}</td>
        </tr>
      )
    })

    return (
      <div className="commentsWrapper">
        COMMENT SECTION HERE!!!!!!!!!!!!
        <table className="commentsTable">
          <tbody>
            {comments}
          </tbody>
        </table>

      </div>
    )
  }
}

export default Comments;
