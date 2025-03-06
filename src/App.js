import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ScrollProgress />
        <CustomCursor />
        <ThemeToggle />
        <Header />
        <main>
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 