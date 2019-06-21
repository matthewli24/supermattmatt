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
    event.preventDefault();
    console.log("TRYING TO SUBMIT FORM");
  }

  handleClickSubmit = (event) => {
    console.log(`${this.state.username} said: ${this.state.comment}`);
  }

  render() {
    return (
      <div className="chatWrapper">
        {/* <div>Username: {this.state.username}</div>
        <div>Comment: {this.state.comment}</div> */}

        <label className="chatLabel"> 
          Please Any Comments, Love, Hate, Trolls, and More Love Are All Welcome!!!
        </label>

        <form className="chatFormContainer" onSubmit={this.handleSubmit}>

          <div className="usernameSection">
            <label className="userNameLabel">Name:</label>
            <input className="userNameInput" 
                   type="text" 
                   id="username" 
                   name="username" 
                   placeholder="Anonymous"
                   maxLength={17}
                   onChange={this.handleUserNameChange}
            />
          </div>
          
          <div className="commentSection">
            <textarea className="commentTextArea"
                      placeholder="Write Something Awesome or Not So Awesome ..."
                      required
                      maxLength={250}
                      onChange={this.handleCommentChange}
            />
          </div>

          <input className="chatSubmitButton"
                 type="button" 
                 value="Submit" 
                 onClick={this.handleClickSubmit}
          />

        </form>
      </div>
    );
  }
}

export default Chat;
