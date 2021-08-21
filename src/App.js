import './App.css';

import GlobalStyle from './components/GlobalStyle';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Works from './components/Works';

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Works />
    </>

  );
}

export default App;

