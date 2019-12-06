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

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
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
            <label className="itemLabel"> Email </label>
            <input className="itemInput"
                  id="email"
                  type="email" 
                  required 
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleOnChange}/>
          </div>
          
          <div className="emailFormitem">
            <label className="itemLabel"> Name </label>
            <input className="itemInput"
                  id="name"
                  type="text" 
                  required 
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleOnChange}/>
          </div>

          <div className="emailFormitem">
            <label className="itemLabel"> Message </label>
            <textarea className="messageTextArea"
                      id="message"
                      placeholder="Write Something Awesome ..."
                      required
                      maxLength={250}
                      value={this.state.message}
                      onChange={this.handleOnChange}
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