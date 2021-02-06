import React from 'react';
import './App.css';
import './styles.css'
import './fonts.scss'
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

// import Page from './components/Page';
import Home from './components/Home/Home';
import About from './components/About/About';
import Lab from './components/Lab';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="foldLeftFromRight"
              transitionKey={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={() => <Home/>} />
                <Route path="/about" component={() => <About/>} />
                <Route path="/lab" component={() => <Lab/>} />
                <Route path="/contact" component={() => <Contact/>} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default App;
