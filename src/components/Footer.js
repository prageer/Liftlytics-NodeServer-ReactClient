import React from 'react';

import {NavLink} from 'react-router-dom';

/**
 * Render the footer
 */
class Footer extends React.Component {
  /**
   * Render Footer component
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (      
      <footer id="footer" className="site-footer" role="contentinfo">
        <div className="sqs-layout sqs-grid-12 columns-12" data-layout-label="Footer Content" data-type="block-field" data-updated-on="1472494582631" id="footer-blocks">
            <div className="row sqs-row" id="yui_3_17_2_1_1510040351572_117">
                <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1510040351572_116">
                    <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_37_1464027709245_32051">
                        <div className="sqs-block-content">
                            <hr />
                        </div>
                    </div>
                    <div className="row sqs-row" id="yui_3_17_2_1_1510040351572_115">
                        <div className="col sqs-col-8 span-8">
                            <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_17_1468338547821_53055">
                                <div className="sqs-block-content">
                                  {/*<h2>Licensed in New York + California</h2>*/}
                                  <img src="https://www.postmm.com/wp-content/uploads/google-partner-adwords-search-marketing-post-modern-marketing.png" style={{width: 150}} />

                                  <img className="thumb-image loaded bottom-thumb-mobile"                                                          
                                  src="./ll_chart_blue.png"
                                  style={{position:'absolute', width: 37, height: 52, right: '8%', top: 30}}
                                  data-image-resolution="100w"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="col sqs-col-4 span-4" id="yui_3_17_2_1_1510040351572_114" style={{}}>
                            <div style={{}} className="image-block-wrapper   has-aspect-ratio" data-description="" id="yui_3_17_2_1_1510040351572_108">
                              <img className="thumb-image loaded bottom-thumb-pc"                                                          
                                src="./ll_chart_blue.png"
                                style={{marginTop: 20, position:'absolute', width: 37, height: 52, right: '8%'}}
                                data-image-resolution="100w"
                              />
                            </div>
                        </div>
                    </div>
                    <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_10_1468350320832_10882">
                        <div className="sqs-block-content">
                            <hr />
                        </div>
                    </div>
                    <div className="row sqs-row">
                        <div className="col sqs-col-7 span-7">
                            <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_10_1468350320832_18745">
                                <div className="sqs-block-content">
                                    <p>
                                      <NavLink to="/" data-ajax-loader="ajax-loader-binded">home</NavLink>&nbsp;|&nbsp;                                      
                                      <NavLink to="/about" data-ajax-loader="ajax-loader-binded">about</NavLink>&nbsp;|&nbsp;
                                      <NavLink to="/services" data-ajax-loader="ajax-loader-binded">services</NavLink>&nbsp;|&nbsp;
                                      {
                                      /*
                                      <NavLink to="/clients" data-ajax-loader="ajax-loader-binded">clients</NavLink>&nbsp;|&nbsp;
                                      <NavLink to="/news" data-ajax-loader="ajax-loader-binded">news</NavLink>&nbsp;|&nbsp;
                                      */
                                      }
                                      <NavLink to="/contact" data-ajax-loader="ajax-loader-binded">contact</NavLink>
                                    </p>
                                    <p>
                                      {
                                        /*
                                        <span style={{fontSize: '14.6667px'}}>(212) 555-0110 | template.placeholder@example.com</span>
                                        <br /><span style={{fontSize: '14.6667px'}}>777 Nameless Ave. New York, NY 00000</span>
                                        <br /><span style={{fontSize: '14.6667px'}}>disclaimer | attorney advertising</span>
                                        */
                                      }
                                      <a href="mailto:hello@liftlytics.com" style={{fontSize: '16px', textDecoration: 'none'}}>hello@liftlytics.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col sqs-col-1 span-1">
                            <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_10_1468350320832_19684">
                                <div className="sqs-block-content">&nbsp;</div>
                            </div>
                        </div>
                        <div className="col sqs-col-4 span-4">
                            <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_10_1468350320832_17407">
                                <div className="sqs-block-content">
                                    {
                                      /*
                                      <p className="text-align-right"><span style={{fontSize: '14.6667px'}}>LIFT LYTICS is a boutique business and intellectual property law practice that provides legal advice to some of the most innovative creatives and emerging companies in the arts, entertainment, digital media, tech, and fashion industries.</span></p>\
                                      */
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_18_1468350320832_9546">
                        <div className="sqs-block-content">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
