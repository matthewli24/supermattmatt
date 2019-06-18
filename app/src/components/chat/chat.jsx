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
  
  render() {
    return (
      <div className="chatWrapper">
        <p>Username: {this.state.username}</p>
        <p>Comment: {this.state.comment}</p>

        <form className="chatFormContainer" onSubmit={this.handleSubmit}>

          <div className="usernameSection">
            <label>Name:</label>
            <input type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Anonymous"
                  onChange={this.handleUserNameChange}
                  />
          </div>
          
          <div className="commentSection">
            <textarea className="commentTextArea"
                      placeholder="Write Something"
                      onChange={this.handleCommentChange}
            />
          </div>

          <input type="button" value="Submit" onClick={this.handleSubmit}/>

        </form>
      </div>
    );
  }
}

export default Chat;
