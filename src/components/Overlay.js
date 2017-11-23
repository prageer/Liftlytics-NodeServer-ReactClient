import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'react-fa';

/**
 * Render the header including menu items
 */
class Overlay extends React.Component {

  constructor(props) {
    super(props);
  }

  goPage() {
    document.body.className = document.body.className.replace(" mobile-menu-open", "");
    this.props.goPage(false);
  }
  /**
   * Render Header component
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (      
      <div className="overlay-nav-container" id="overlayNav" style={{paddingTop: '104px', paddingBottom: '104px'}}>
        <div className="overlay-nav-wrapper">
            <div className="mobile-primary-nav-wrapper">
                <nav className="mobile-primary-nav-links">
                    <div className="collection active homepage folder-link">
                      <NavLink to="/" className="nav-item-page" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        Home
                      </NavLink>
                    </div>
                    
                    <div className="collection folder-link">
                      <NavLink to="/about" className="nav-item-page" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        About
                      </NavLink>
                    </div>

                    <div className="collection folder-link">
                      <NavLink to="/services" className="nav-item-page" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        Services
                      </NavLink>
                    </div>

                    {
                    /*
                    <div className="collection folder-link">
                      <NavLink to="/clients" className="nav-item-page" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        Clients
                      </NavLink>
                    </div>

                    <div className="collection folder-link">
                      <NavLink to="/news" className="nav-item-blog" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        News
                      </NavLink>
                    </div>
                    */
                    }

                    <div className="collection folder-link">
                      <NavLink to="/contact" className="nav-item-page" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        Contact
                      </NavLink>
                    </div>

                </nav>
            </div>

            <div className="mobile-secondary-nav-wrapper">
                <nav className="mobile-secondary-nav-links">

                    <div className="external folder-link">
                      <NavLink to="/contact" data-ajax-loader="ajax-loader-binded" onClick={()=>{this.goPage();}}>
                        <Icon name="envelope" /> <span style={{textTransform: 'lowercase'}}>hello@liftlytics.com</span>
                      </NavLink>
                    </div>

                </nav>
            </div>

        </div>
      </div>
    );
  }
}

export default Overlay;
