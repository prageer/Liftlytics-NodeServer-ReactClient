import React from 'react';
import {
  Footer
} from '../components';
import { default as Fade } from 'react-fade';
/**
 * Render the Services
 */
const fadeDuration = 0.5;
class Services extends React.Component {

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
   * Render Services component
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
                <span data-content-field="title">Services</span>
              </h1>
              <div className="page-description" data-content-field="description">
                <p><span>Deliver informed and actionable eMarketing decisions</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="sqs-block html-block sqs-block-html">
                              <div className="sqs-block-content">
                                <h1 className="text-align-center">Areas of Service</h1>
                              </div>
                          </div>

                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                              <div className="sqs-block-content">&nbsp;</div>
                          </div>
                          
                          {
                            /*
                          <div className="row sqs-row">
                            <div className="col sqs-col-4 span-4">
                                <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                    <div className="sqs-block-content">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col sqs-col-4 span-4">
                                <div className="sqs-block quote-block sqs-block-quote">
                                    <div className="sqs-block-content">
                                        <figure>
                                            <blockquote>
                                                <span>“</span>Accurately target and re-engage more of your customer base with paid search and dynamic display ads across web, mobile browsers, and apps.<span>”</span>
                                            </blockquote>
                                            <figcaption className="source">— Data Analysis, Conversion-Centric Design, Copy And Content</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>                          
                          </div>
                          */
                          }

                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule">
                                    <div className="sqs-block-content">
                                      <hr />
                                    </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html">
                                    <div className="sqs-block-content sqs-block-content-height-align">
                                      <h3>SEM / SEO / PPC Spend Management</h3>
                                      <p>We are in-front of your future customers with the right message, at the right time, in search, display, social, or even print. We manage your marketing spend based on CLV, not shallow metrics, and we continually optimize, so you spend less, convert more, and your customers are happier.</p>
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
                                    <div className="sqs-block-content sqs-block-content-height-align">
                                      <h3>Marketing Websites</h3>
                                      <p>
                                        We create beautiful and compelling sites that convert. Our marketing sites are the centerpiece of your user acquisition and conversion strategies, and they drive results.
                                      </p>
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
                                  <div className="sqs-block-content sqs-block-content-height-align">
                                    <h3>Optimization Strategy</h3>
                                    <p>We understand your conversion journeys and personas and help build a repeatable, iterative process to achieve your business objectives. Our process begins and ends with data: Track, Analyze, Plan, Test, and Target. Rinse and repeat.</p>
                                  </div>
                                </div>                                
                            </div>
                          </div>


                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                              <div className="sqs-block-content">&nbsp;</div>
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

                          <div className="row sqs-row">
                            <div className="col sqs-col-4 span-4">
                                <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                                    <div className="sqs-block-content">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col sqs-col-4 span-4">
                                <div className="sqs-block quote-block sqs-block-quote">
                                    <div className="sqs-block-content">
                                        <figure>
                                            <blockquote className="service-quote">
                                                <span>“</span>Accurately target and re-engage more of your customer base with paid search and dynamic display ads across web, mobile browsers, and apps.<span>”</span>
                                            </blockquote>
                                        </figure>
                                    </div>
                                </div>
                            </div>                          
                          </div>

                          <div className="row sqs-row service-hr">
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
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                              <div className="sqs-block-content">&nbsp;</div>
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
                                      <h3>Data Analysis</h3>
                                      <p>Research, Excel excellence, and data-science. All out of the box. The sharpest minds, the most capable tools, and a dogged pursuit of results leads to a growing business. Grow with us.</p>
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
                                      <h3>Conversion-centric Design</h3>
                                      <p>We don’t just deliver beautiful designs, but also keep the principles of conversions in mind. Let’s declutter key pages, let’s keep that call to action button prominent, let’s make each step on the path to conversion obvious.</p>
                                    </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">                                
                                <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_62337">
                                  <div className="sqs-block-content">
                                    <hr />
                                  </div>
                                </div>
                                <div className="sqs-block html-block sqs-block-html">
                                  <div className="sqs-block-content">
                                    <h3>Copy and Content</h3>
                                    <p>We write to inform, persuade, and delight. Our content draws site visitors and propels your digital properties up the search rankings.</p>
                                  </div>
                                </div>
                            </div>
                          </div>

                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                              <div className="sqs-block-content">&nbsp;</div>
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

export default Services;
