import { useRef } from 'react';

import Header from './components/Header';
// import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Footer from './components/Footer';

import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

import loadable from 'loadable-components';

function App() {
  const aboutMeRef = useRef(null)
  const worksRef = useRef(null)
  const footerRef = useRef(null)

  debugger
  const Header = loadable(() => import('./components/Header'))
  const AboutMe = loadable(() => import('./components/AboutMe'))
  const Works = loadable(() => import('./components/Works'))
  const Footer = loadable(() => import('./components/Footer'))

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header
          aboutForwardRef={aboutMeRef}
          workForwardRef={worksRef}
          footerForwardRef={footerRef}
        />
        <AboutMe aboutForwardRef={aboutMeRef} />
        <Works workForwardRef={worksRef} />
        <Footer footerForwardRef={footerRef} />
      </ThemeProvider>
    </>

  );
}

export default App;

