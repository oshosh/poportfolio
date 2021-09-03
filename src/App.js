import { useRef } from 'react';

import Navigation from './components/Navigation';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Footer from './components/Footer';

import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

function App() {
  const aboutMeRef = useRef(null)
  const worksRef = useRef(null)
  const footerRef = useRef(null)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation
          aboutMefowardRef={aboutMeRef}
          workForwardRef={worksRef}
          footerForwardRef={footerRef}
        />
        <Header />
        <AboutMe forwardRef1={aboutMeRef} />
        <Works forwardRef2={worksRef} />
        <Footer forwardRef3={footerRef} />
      </ThemeProvider>
    </>

  );
}

export default App;

