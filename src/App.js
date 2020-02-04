import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const content= `Aylor is a talented web dev. She would be a great addition
to your team!`;
const headerContent = `Hire Aylor Brown!`;

export default function App() {
  return (
    <div>
      <Header content={headerContent}/>
      <MainContent content={content}/>
      <Footer />
    </div>
  );
}

// export default App;
