import { useRef } from 'react';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Footer from './components/Footer';

function MainPage() {
  const aboutMeRef = useRef(null);
  const worksRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Header aboutForwardRef={aboutMeRef} workForwardRef={worksRef} footerForwardRef={footerRef} />
      <AboutMe aboutForwardRef={aboutMeRef} />
      <Works workForwardRef={worksRef} />
      <Footer footerForwardRef={footerRef} />
    </>
  );
}

export default MainPage;
