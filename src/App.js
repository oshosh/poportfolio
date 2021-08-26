import GlobalStyle from './components/GlobalStyle';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Works from './components/Works';
import Footer from './components/Footer';

import Navigation from './components/Navigation';
import { useRef } from 'react';


function App() {
  const aboutMeRef = useRef(null)
  let worksRef = useRef(null)

  return (
    <>
      <GlobalStyle />
      <Navigation
        aboutMefowardRef={aboutMeRef}
        workForwardRef={worksRef}
      />
      <Header />
      <AboutMe forwardRef1={aboutMeRef} />
      <Works forwardRef2={worksRef} />
      <Footer />
    </>

  );
}

export default App;

