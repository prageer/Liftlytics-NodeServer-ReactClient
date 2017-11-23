import React from 'react';
import {
  Footer,
  EmailContact
} from '../components';
import {NavLink} from 'react-router-dom';
import { default as Fade } from 'react-fade';
import {Icon} from 'react-fa';

// liftlytics
/**
 * Render the Contact
 */
const fadeDuration = 0.5;
class Contact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeOut: false,
      visibility: 'visible'
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(nextProps, { fadeOut }) {
    if (fadeOut) {
      setTimeout(() => {
        this.setState({
          visibility: 'hidden'
        })
      }, fadeDuration)
    }
  }

  

  /**
   * Render Contact component
   * @return {jsxresult} result in jsx format
   */
  render() {    

    return (
      <Fade
        out={this.state.fadeOut}
        duration={fadeDuration}
        style={{
          visibility: this.state.visibility
        }}
      >
      <div id="content" className="content-container">

        <main id="page" className="site-page" role="main">
          <div className="page-text-wrapper clearfix pg-txt page-top">
              <h1 className="page-title">
                <span data-content-field="title">Contact</span>
              </h1>
              <div className="page-description" data-content-field="description">
                <p><span>Let’s chat.</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="row sqs-row">
                              <div className="col sqs-col-7 span-7">
                                  <div className="sqs-block html-block sqs-block-html">
                                      <div className="sqs-block-content">
                                          <h1>Want to know how many new customers you should be getting?</h1>
                                          <p>Depending upon your needs, we can manage some portion or all of your marketing and advertising efforts, including all of your digital properties and social. We guarantee our work pays for itself.</p>
                                          <p>Use the form below to tell us how you would like to drive success for your business - more traffic, more awareness, more leads, more customers?</p>                                          
                                      </div>
                                  </div>
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-6 span-6">
                                          <div className="sqs-block form-block sqs-block-form">
                                              <div className="sqs-block-content">
                                                  <div className="form-wrapper">
                                                      <div ref={(ref)=>{this.contactForm=ref;}}></div>
                                                      {<EmailContact />}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block html-block sqs-block-html">
                                      <div className="sqs-block-content">
                                          <h3><Icon name='envelope' /> Contact</h3>
                                          <h2>hello@liftlytics.com<br /></h2>
                                          <NavLink className='go-contact' to='#contact-form' onClick={()=>{
                                            var el = this.contactForm;
                                            var rect = el.getBoundingClientRect();
                                            window.scrollTo(0, rect.top+window.scrollY-350 );
                                          }}>Contact Form</NavLink>
                                          <p>&nbsp;</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        </main>

        <Footer />

      </div>
      </Fade>
    );
  }
}

export default Contact;
