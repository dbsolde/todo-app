import React from 'react';
import '../styles/app.css';

import Header from '../containers/Header'
import Content from '../containers/Content'

const App = () => (
  <div className="container">
      <Header />
      <Content />
  </div>
)

export default App
