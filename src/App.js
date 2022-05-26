import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}
