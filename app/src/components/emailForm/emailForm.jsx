import React, { Component } from 'react';
import axios from 'axios';
import './emailForm.scss';


class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
      showError: false
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let email = this.state.email;
    let name = this.state.name;
    let message = this.state.message;

    if(email === "" || name === "" || message === ""){
      this.setState({ showError: true},
        () => {
          setTimeout(() => {
            this.setState({ showError: false})
          },3000)
        }
      )
    }

    else {
      const data = {
        service_id: 'gmail',
        template_id: 'mattmatt',
        user_id: 'user_GOq0JWAWH4AtO3lgSzJA6',
        template_params: {
          name: name,
          sender: email,
          message: message
        }
      }
      axios.post(' https://api.emailjs.com/api/v1.0/email/send', data)
      .then(res => {
        console.log(res);
        this.setState({
          email: "",
          name: "",
          message: ""
        });
      })
      .catch(error => {
        console.log(error)
      })
    }


  }

  render() {
    let errorBar = this.state.showError ?
      <div className="errorBar">
        Please Fill Out All Required Fields
      </div>
      : null

    return (
      <div className="emailFormWrapper">

        <form className="emailForm" onSubmit={this.handleSubmit}>
          <div className="emailFormitem">
            <label className="itemLabel"> Email :</label>
            <input className="itemInput"
                  type="text" 
                  required 
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleEmailChange}/>
          </div>
          
          <div className="emailFormitem">
            <label className="itemLabel"> Name :</label>
            <input className="itemInput"
                  type="text" 
                  required 
                  placeholder="Name"
                  value={this.state.Name}
                  onChange={this.handleNameChange}/>
          </div>

          <div className="emailFormitem">
            <label className="itemLabel"> Message : </label>
            <textarea className="messageTextArea"
                      placeholder="Write Something Awesome or Not So Awesome ..."
                      required
                      maxLength={250}
                      value={this.state.message}
                      onChange={this.handleMessageChange}
            />
          </div>

          <input className="emailSubmitButton"
                  type="submit" 
                  value="Submit" 
                  onClick={this.handleSubmit}
          />
          {errorBar}
        </form>

      </div>
    )
  }

}

export default EmailForm;