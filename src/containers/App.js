import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {
  Header,
  Footer,
  MobileBar,
  Overlay
} from '../components';

import {
  Home,
  About,
  Services,
  Clients,
  News,
  Contact,
  NoMatch
} from '.';



/**
 * Top level Container
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpand: true
    }
  }


  /**
   * Render the entire app
   * @return {jsxresult} result in jsx format
  */
  render() {
    const {isExpand} = this.state;
    const SomeComponent = withRouter(props => <Header {...props}/>);

    return (      
      <Router>        
        <div>
          <MobileBar 
            isExpand= {isExpand} 
            goPage = {(expand)=>{
              this.setState({
                isExpand: expand
              });
            }}
          />
          <Overlay 
            goPage = {()=>{
              this.setState({
                isExpand: true
              });
            }}
          />
        
          <div id="site" className="site-container" style={{paddingTop: 0, paddingBottom: 0, marginTop: 0}}>
            <SomeComponent />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/services" component={Services} />
                  <Route path="/clients" component={Clients} />
                  <Route path="/news" component={News} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
