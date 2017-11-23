import React from 'react';
import {validateEmail} from '../utils/utils';

/**
 * Render the header including menu items
 */
class EmailContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      note: '',
      showError: false,
      sendingEmail: false,
      sentEmail: false,
      emailError: false
    }
  }

  componentDidMount() {
    
  }

  handleSubmit(event) {
    event.preventDefault();

    const {emailAddress, firstName, lastName, note} = this.state;

    if(!validateEmail(this.state.emailAddress)) {
      this.setState({
        showError: true
      });

      return;
    } else {
      this.setState({
        showError: false,
        sendingEmail: true
      });
    }

    fetch('/contactus', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        note: note
      })
    })
    .then((response) => {
      if(response.status == 200) {
        this.setState({
            sendingEmail: false,
            sentEmail: true
        });
      } else {
        this.setState({
            sendingEmail: false,
            sentEmail: false,
            emailError: true
        }, ()=>{
          this.disappearEmailSentBox();
        });  

      }
    })
    .catch((error) => {
      this.setState({
        sendingEmail: false,
        emailError: true
      }, ()=>{
        this.disappearEmailSentBox();
      });
      // console.error(error);
    });
  }

  disappearEmailSentBox() {
    setTimeout(()=>{
      this.setState({
        emailError: false
      });
    }, 3000);
  }

  /**
   * Render Header component
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {showError, sendingEmail, sentEmail, emailError} = this.state;

    return (
      <div className="form-inner-wrapper">

        {

          !sentEmail ? 

            <form onSubmit={(event)=>this.handleSubmit(event)}>

                <div className="field-list clear">

                    <fieldset className="form-item fields name required">
                        <div className="title">Name</div>
                        <legend>Name</legend>

                        <div className="field first-name">
                            <label className="caption">
                                <input className="field-element field-control" name="fname" type="text" spellCheck="false" onChange={(evt)=>{
                                  this.setState({
                                    firstName: evt.currentTarget.value
                                  });
                                }} maxLength="30" data-title="First" /> 
                                First Name
                            </label>
                        </div>
                        <div className="field last-name">
                            <label className="caption">
                                <input className="field-element field-control" name="lname" type="text" spellCheck="false" onChange={(evt)=>{
                                  this.setState({
                                    lastName: evt.currentTarget.value
                                  });
                                }} maxLength="30" data-title="Last" /> 
                                Last Name
                            </label>
                        </div>
                    </fieldset>

                    <div className="form-item field email required">
                        <label className="title">Email Address <span className="required">*</span></label>

                        <input className="field-element" name="email" type="text" spellCheck="false" onChange={(evt)=>{
                          this.setState({
                            emailAddress: evt.currentTarget.value
                          });
                        }} id="email-yui_3_17_2_1_1463758909823_37519-field" />
                        {
                          (showError) ?
                            <div className="field-error">Email Address is not valid. Email addresses should follow the format user@domain.com.</div>
                            :
                            <div className="hidden field-error">Email Address is not valid. Email addresses should follow the format user@domain.com.</div>
                        }
                        
                    </div>
                    
                    <div className="form-item field textarea required">
                        <label className="title">How Can We Help?</label>
                        <div className="description">
                            Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.
                          </div>
                        <textarea className="field-element " onChange={(evt)=>{
                          this.setState({
                            note: evt.currentTarget.value
                          });
                        }}></textarea>
                    </div>

                </div>

                {
                  (emailError) &&
                    <div className="field-error">Maybe problem occurs, Please try again later</div>
                }

                <div className="form-button-wrapper form-button-wrapper--align-left">
                    <input className="button sqs-system-button sqs-editable-button" type="submit" value={sendingEmail?'Submitting...':'Submit'} />
                </div>
                
            </form>
            :
            <div>
              <h1 className="sendingSuccess">Thank you for contacting us</h1>
              <p className="">We’ll get back to you pronto</p>
            </div>
          }

      </div>
    );
  }
}

export default EmailContact;
