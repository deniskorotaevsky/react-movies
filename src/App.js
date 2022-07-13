import React from 'react';
import './App.css';
import Book from './Book';


const App = () => {
  return (
    <>
      <Book name="React JS for beginners" year="2018" price='1000'>
        t2t
      </Book>
      <Book name="angular for beginners" year="2019" price='1100' />
      <Book name="Vue JS for beginners" year="2020" price='1200' />
      </>
      );
}

export default App;
