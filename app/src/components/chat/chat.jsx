import React, { Component }  from 'react';

import './chat.scss';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: ""
    };
  }
  

  componentDidMount() {

  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleSubmit = (event) => {
    let username = this.state.username;
    if(username === "") username = "Anonymous Kitty";
    
    console.log(`${username} said: ${this.state.comment}`);
    this.props.firebase.addComment(username, this.state.comment)
    .then(() => {
      this.setState({
        username: "",
        comment: ""
      })
    })
    .catch(error => {
      console.log("failed", error);
    })

    event.preventDefault();
  }

  render() {
    return (
      <div className="chatWrapper">
        {/* <div>Username: {this.state.username}</div>
        <div>Comment: {this.state.comment}</div> */}

        <label className="chatLabel"> 
          Please Write Any Comments, Love, Hate, Trolls, and More Love Are All Welcome!!!
        </label>

        <form className="chatFormContainer" onSubmit={this.handleSubmit}>

          <div className="usernameSection">
            <label className="userNameLabel">Name:</label>
            <input className="userNameInput" 
                   type="text" 
                   id="username" 
                   name="username" 
                   placeholder="Anonymous"
                   value={this.state.username}
                   maxLength={20}
                   onChange={this.handleUserNameChange}
            />
          </div>
          
          <div className="commentSection">
            <textarea className="commentTextArea"
                      placeholder="Write Something Awesome or Not So Awesome ..."
                      value={this.state.comment}
                      required
                      maxLength={250}
                      onChange={this.handleCommentChange}
            />
          </div>

          <div className="formButtonContainer">
            <input className="chatSubmitButton"
                  type="button" 
                  value="Submit" 
                  onClick={this.handleSubmit}
            />

          </div>
          

        </form>
      </div>
    );
  }
}

export default Chat;
