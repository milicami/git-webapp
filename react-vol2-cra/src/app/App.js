import React from 'react';
import './App.css';

import Header from './partials/Header'
import PostList from './posts/PostList'
import Footer from './partials/Footer'
import Data from '../data/Data'



const App = (props) => {
  return (
    <React.Fragment>
      <Header title="Gemini"/>
      <PostList myPosts={Data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
