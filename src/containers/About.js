import React from 'react';
import {
  Footer
} from '../components';
import {NavLink} from 'react-router-dom';
import { default as Fade } from 'react-fade';
/**
 * Render the About
 */

const fadeDuration = 0.5;
class About extends React.Component {

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
   * Render About component
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
          <div className="page-text-wrapper clearfix pg-txt page-top" data-edit-main-image="Background">
              <h1 className="page-title"><span data-content-field="title">About</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Data. Passion. Results.</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="row sqs-row">
                              <div className="col sqs-col-7 span-7">
                                  <div className="sqs-block html-block sqs-block-html">
                                      <div className="sqs-block-content">
                                          <h1>History</h1>
                                          <p>Lift Lytics is a full-service technology consultancy, founded in 2006. We initially began servicing clients in the business analytics space (hence our love for all things data), and eventually grew to working with partners in a number of verticals including residential, retail and commerce, media and publishing, travel, fashion, and general consumer. During this period we have built products and sites, managed marketing, and assisted in client strategy. What we’re most proud of is our history of excellence embodied in the growth and success of the clients we service. We are more than a service provider or vendor, we are partners. It’s why we are so passionate about driving results from data.</p>
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
                                          <h1>Get in touch</h1>
                                          <p>We at Lift Lytics know that finding the right partner for your marketing and advertising efforts is a choice not to be taken lightly. That’s why we offer free consultations to walk you through your needs, the scope of your goals, and your budget. We are however very selective of who we work with and reserve the right to decline work should we feel the partnership would not be as positive as we’d like. Our reputation is paramount.</p>
                                          <h3><NavLink to="/contact" data-ajax-loader="ajax-loader-binded">Contact us</NavLink>&nbsp;▸</h3></div>
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

export default About;
