import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import Home from './components/Home';
import About from './components/About';
import Page from './components/Page';
import Exp from './components/Exp';
import Portfolio from './components/Portfolio';

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
                  <Route path="/exp" component={() => <Exp/>} />
                  <Route path="/portfolio" component={() => <Portfolio/>} />
                  <Route path="/page4" component={() => <Page value={4}/>} />
                  <Route path="/page5" component={() => <Page value={5}/>} />
                  <Route path="/page6" component={() => <Page value={6}/>} />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </BrowserRouter>
  );
}

export default App;
