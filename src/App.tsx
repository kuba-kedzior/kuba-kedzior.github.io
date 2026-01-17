import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from "./components/navbar";
import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Footer from './components/footer';
import About from './pages/About';

const AppRoot: Component = (props:any) => (
  <div class = "min-h-screen bg-white flex flex-col items-stretch">
    <Navbar/>
    <div class= "flex-1 flex flex-col items-stretch">
      {props.children}
    </div>
    <Footer/>
  </div>
)

const App: Component = () => {
  return (
    <>
    <Router root={AppRoot}>
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="*404" component={NotFound} />
    </Router>
    </>
  );
};

export default App;
