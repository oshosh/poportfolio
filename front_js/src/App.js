import { useRef } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";

import loadable from "loadable-components";


//https://velog.io/@2wo0/JavaScript%EC%97%90%EC%84%9C-TypeScript%EB%A1%9C-%EB%B3%80%ED%99%98
function App() {
  const aboutMeRef = useRef(null);
  const worksRef = useRef(null);
  const footerRef = useRef(null);

  const Header = loadable(() => import("./components/Header"));
  const AboutMe = loadable(() => import("./components/AboutMe"));
  const Works = loadable(() => import("./components/Works"));
  const Footer = loadable(() => import("./components/Footer"));
  console.log('sadfs')
  debugger
  
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
