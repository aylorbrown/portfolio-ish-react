import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Nav from './Nav';

const content= `Aylor is a talented web dev. She would be a great addition
to your team!`;
const headerContent = `Hire Aylor Brown!`;
const linkNames = [
  'Home',
  'Portfolio',
  'Contact'
]


export default function App() {
  return (
    <div className="container-fluid">
      <Header title={headerContent}/>
      <Nav links={linkNames}/>
      <MainContent content={content}/>
      <Footer />
    </div>
  );
}

// export default App;
