import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { observer, Provider } from 'mobx-react';

import logo from './logo.svg';
import './App.scss';

import Partial from './components/partial';
import ImageConf from './components/confBase/ImageConf';
import FormConf from './components/form/FormConf';
import Image from './components/image';
import Form from './components/form';

import stores from './stores';

@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router>
          <div className="App">
            <div className="simulator">
              <Partial type={Image} conf="/banner"/>
              <Partial type={Form} conf="/form" />
              <Partial type={Image} conf="/banner" />
              <Partial type={Image} conf="/banner" />
              <Partial type={Image} conf="/banner" />
            </div>
            <div className="configuartion">
              <h3>具体配置</h3>
               <Route path="/banner" component={ImageConf}/>
               <Route path="/form" component={FormConf}/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
