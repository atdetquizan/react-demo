import React from 'react';

import Header from './common/components/Header/Header';
import Body from './common/components/Body/Body';
import Footer from './common/components/Footer/Footer';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-app'>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
