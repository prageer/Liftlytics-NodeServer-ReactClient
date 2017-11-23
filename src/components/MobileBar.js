import React from 'react';
import {NavLink} from 'react-router-dom';
import ReactSVG from 'react-svg';

/**
 * Render the header including menu items
 */
class MobileBar extends React.Component {
  /**
   * Render Header component
   * @return {jsxresult} result in jsx format
   */
  constructor(props) {
    super(props);    
  }
  
  showModal(whatKind) {
    if (!whatKind) {
      document.body.className += " mobile-menu-open";
    } else {
      document.body.className = document.body.className.replace(" mobile-menu-open", "");
    }

    this.props.goPage(whatKind);
  }

  render() {

    const {isExpand} = this.props;
    let leftIcon = null;
    if (isExpand) {
      leftIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30" fill="none" stroke="currentcolor" style={{display: 'inline-block', verticalAlign: 'middle'}} onClick={()=>{this.showModal(false);}}>
          <path d="M0 2.5 L16 2.5"></path>
          <path d="M0 8 L16 8"></path>
          <path d="M0 13.5 L16 13.5"></path>
        </svg>;
    } else {
      leftIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="none" stroke="currentcolor" style={{display: 'inline-block', verticalAlign: 'middle'}} onClick={()=>{this.showModal(true);}}>
          <path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"></path>
          <path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"></path>
        </svg>;
    }

    return (      
      <div className="mobile-bar-wrapper">
        <div className="mobile-bar-flex-child"></div>
        <div className="mobile-branding-wrapper">

            <div className="mobile-logo-image active">
                <NavLink to="/" data-ajax-loader="ajax-loader-binded">
                  <ReactSVG
                      path='informanalytics-logo-2.svg'
                      style={{width: 180, height: 120}}
                      callback={svg => console.log(svg)}
                  />
                </NavLink>
            </div>

            <div className="mobile-site-tagline">Business + Intellectual Property Attorneys</div>

        </div>
        <label className="mobile-nav-toggle-label">
            {leftIcon}
        </label>
      </div>
    );
  }
}

export default MobileBar;
