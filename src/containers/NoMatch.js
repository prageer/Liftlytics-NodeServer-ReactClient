import React from 'react';
import {
  Footer
} from '../components';
import {NavLink} from 'react-router-dom';

/**
 * Render the NoMatch
 */
class NoMatch extends React.Component {
  /**
   * Render NoMatch component
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
      <div id="content" className="content-container">
        
        <main id="page" className="site-page" role="main">
          <div className="sqs-layout sqs-grid-12 columns-12 collection-header empty">
            <div className="row sqs-row">   
                <div className="col sqs-col-12 span-12"></div>
            </div>
          </div>

          <div className="main-content" data-content-field="main-content">            
              <p>We couldn't find the page you were looking for. This is either because:</p>
              <ul>
                <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                <li>The page you are looking for has been moved or deleted.</li>
              </ul>
              <p>You can return to our homepage by <a href="/" data-ajax-loader="ajax-loader-binded">clicking here</a></p>
          </div>          

          <div className="sqs-layout sqs-grid-12 columns-12 collection-footer empty">
            <div className="row sqs-row">
                <div className="col sqs-col-12 span-12"></div>
            </div>
          </div>
        </main>

        <Footer />

      </div>
    );
  }
}

export default NoMatch;
