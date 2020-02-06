import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Nav from './Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const content= `Aylor is a talented web dev. She would be a great addition
to your team!`;
const headerContent = `Hire Aylor Brown!`;
const linkNames = [
  {
    text: 'Home', 
    path: '/'
  }, 
  {
    text: 'Blog', 
    path: '/blog'

  }
]

const footerLinks = [
  {
    href: "mailto:me@me.com", 
    text: "Email Aylor!"
  },
  {
    href: "tel:40440444040", 
    text: "Call Aylor!"
  }
]

export default function App() {
  return (
    <Router>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul> */}

      <Nav 
        links={linkNames}
      />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>You are Home</h1>;
}

function Blog() {
  return <h1>You are on the blog!</h1>
}

{/* <div className="container-fluid">
      <Header title={headerContent}/>
      <Nav links={linkNames}/>
      <MainContent content={content}/>
      <Footer />
    </div> */}