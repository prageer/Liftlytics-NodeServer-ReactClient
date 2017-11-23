import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  Footer,
  EmailContact
} from '../components';
import { default as Fade } from 'react-fade';
import {Icon} from 'react-fa';

/**
 * Render the Home
 */
const fadeDuration = 0.5;
class Home extends React.Component {

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
   * Render Home component
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
        
        {
        /*
        <div className="page-banner-wrapper page-banner-has-image">

          <div className="page-banner-image-container collection-thumbnail-image-container content-fill" style={{overflow: 'hidden'}}>
              <img
                  className="js-page-banner-image" alt="hero_pattern.png"
                  src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/579a4bd7e3df285bcac93baa/1469729761345/hero_pattern.png?format=2500w"
              />
          </div>

          <div className="page-text-wrapper clearfix">
              <h1 className="page-title"><span data-content-field="title">LIFT LYTICS</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Data-driven eMarketing Management</span></p>
              </div>
          </div>
        </div>
        */
        }

        <div className="hero-image hero-image-darker-bg track">
          <div className="container-fluid wrap full-height">
            <div className="row row-gutterless full-height  middle-xs flex-wrap-nowrap">
              <div className="hero-left">
                <div className="display-flex middle-lg full-height">
                  <div className="pr-50  phn-pr-0  phn-ta-c">
                    <div className="middle-lg">
                      <h1 className="hero-title">LIFT LYTICS</h1>
                    </div>
                    
                    <p className="hero-desc mb-20">
                      Data-driven eMarketing Management
                    </p>
                    {
                    /*
                    <p className="hero-sub-desc mar-0">
                      VWO helps you track and analyze your key business metrics and visitor journeys on your website.
                    </p>
                    */
                    }
                    {
                    
                    <p className="p-tmp-header">                      
                    </p>
                    
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main id="page" className="site-page" role="main">

          <div className="main-content" data-content-field="main-content">

            <div className="sqs-layout sqs-grid-12 columns-12">
                <div className="row sqs-row">
                  <div className="col sqs-col-12 span-12">
                      <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                          <div className="sqs-block-content">&nbsp;</div>
                      </div>
                  </div>
                </div>
                <div className="row sqs-row">
                  <div className="col sqs-col-7 span-7">
                      <div className="sqs-block html-block sqs-block-html">
                          <div className="sqs-block-content">
                              <h1>Customer eMarketing expectations are higher than ever; we help businesses exceed them.</h1>
                              <p>Lift Lytics is a full-service eMarketing management firm focused on finding new customers that will convert. We employ the most sophisticated digital tools and techniques to look past clicks, pageviews, and leads towards the lifetime value of a customer and close the loop on advertising dollar costs, channels, and campaigns. We ensure your ad spend returns the highest down funnel dollars. We do all of this analysis and optimization for you, it’s who we are - We’re a next generation services company powered by data, and focused on results.</p>
                              <p>We’d love to discuss optimizing and improving the results of your marketing and advertising efforts. Get in touch with us to set up a consultation, or use the contact form below to determine whether our services are right for you.</p>
                          </div>
                      </div>
                      <div className="sqs-block button-block sqs-block-button">
                          <div className="sqs-block-content">
                              <div className="sqs-block-button-container--left">
                                  <NavLink to="/contact" className="sqs-block-button-element--medium sqs-block-button-element">Learn More</NavLink>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col sqs-col-5 span-5">
                      <div className="row sqs-row">
                          <div className="col sqs-col-1 span-1">
                              <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                  <div className="sqs-block-content">&nbsp;</div>
                              </div>
                          </div>
                          <div className="col sqs-col-4 span-4">
                              <div className="sqs-block html-block sqs-block-html">
                                  <div className="sqs-block-content">                                          
                                      <h3><Icon name="envelope" /> CONTACT</h3>
                                      <h2>hello@liftlytics.com</h2>
                                      <NavLink className='go-contact' to='#contact-form' onClick={()=>{
                                        var el = this.contactForm;
                                        var rect = el.getBoundingClientRect();
                                        window.scrollTo(0, rect.top+window.scrollY-300 );
                                      }}>Contact Form</NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="row sqs-row">
                  <div className="col sqs-col-12 span-12">
                      <div className="sqs-block spacer-block sqs-block-spacer">
                          <div className="sqs-block-content sqs-intrinsic" style={{paddingBottom: '7.11078%'}}>&nbsp;</div>
                      </div>
                      <div className="sqs-block html-block sqs-block-html">
                          <div className="sqs-block-content">
                              <h1>Industries of Focus</h1>
                          </div>
                      </div>
                      <div className="row sqs-row">
                          <div className="col sqs-col-4 span-4">
                              <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                                  <div className="sqs-block-content">
                                      <hr />
                                  </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                  <div className="sqs-block-content">
                                      <h3>Residential</h3>
                                      <p>Housing is more that just four walls and roof, it’s a home, a lifestyle, a community, and an identity. We understand the essence of the properties we manage marketing for and the aspirations of those who wish to be their tenants. Across all of the digital channels, we present the compelling aspects of each properties lifestyle, and speak to a searching renters desired identity. This is more than keyword optimization, segmentation, and retargeting, it’s creating a desire for a better life.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col sqs-col-4 span-4">
                              <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                                  <div className="sqs-block-content">
                                      <hr />
                                  </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                  <div className="sqs-block-content">
                                      <h3>Commercial</h3>
                                      <p>Putting a property’s best foot forward requires more than selling square footage, it’s the presentation of a company on the ascendancy, a home for innovation, and a beacon for new talent. We match the firms to the properties, with scalpel like industry, size, and location segmentation targeting that leads to fantastic conversions and higher occupancy.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col sqs-col-4 span-4">
                              <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                                  <div className="sqs-block-content">
                                      <hr />
                                  </div>
                              </div>
                              <div className="sqs-block html-block sqs-block-html">
                                  <div className="sqs-block-content">
                                      <h3>Retail</h3>
                                      <p>Hang out your shingle on the world wide web. Want to drive foot traffic? Want to drive site traffic? We do both. Same goal; turn visitors into customers. Then, keep those customers coming back. It’s what we do, with sites that elegantly inform and showcase your products.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="sqs-block spacer-block sqs-block-spacer">
                          <div className="sqs-block-content sqs-intrinsic" style={{paddingBottom: '8.33856%'}}>&nbsp;</div>
                      </div>                          
                      <div className="row sqs-row">
                          <div className="col sqs-col-2 span-2">
                              <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                  <div className="sqs-block-content">&nbsp;</div>
                              </div>
                          </div>
                          <div className="col sqs-col-8 span-8">
                              <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                                  <div className="sqs-block-content">
                                      <hr />
                                  </div>
                              </div>
                          </div>
                          <div className="col sqs-col-2 span-2">
                              <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                  <div className="sqs-block-content">&nbsp;</div>
                              </div>
                          </div>
                      </div>
                      <div className="sqs-block spacer-block sqs-block-spacer">
                          <div className="sqs-block-content sqs-intrinsic" style={{paddingBottom: '7.7116%'}}>&nbsp;</div>
                      </div>
                      <div className="row sqs-row">
                          <div className="col sqs-col-3 span-3">
                              <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                  <div className="sqs-block-content">&nbsp;</div>
                              </div>
                          </div>
                          <div className="col sqs-col-9 span-9">
                              <div className="row sqs-row">
                                  <div className="col sqs-col-6 span-6">
                                      <div className="sqs-block html-block sqs-block-html">
                                          <div className="sqs-block-content">
                                              <h1 className="text-align-center">Let's Chat.</h1>
                                              <p>
                                                  <span style={{fontSize: '14.6667px'}}>Use the form below to tell us how you would like to drive success for your business - more traffic, more awareness, more leads, more customers? </span>
                                                  <br />
                                              </p>
                                          </div>
                                      </div>
                                      <div className="sqs-block form-block sqs-block-form">
                                          <div className="sqs-block-content">
                                              <div className="form-wrapper">
                                                  <div ref={(ref)=>{this.contactForm=ref;}}></div>
                                                  {<EmailContact />}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col sqs-col-3 span-3">
                                      <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                          <div className="sqs-block-content">&nbsp;</div>
                                      </div>
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

export default Home;
