import React from "react";
import { ThemeProvider } from "styled-components";
import Information from "@pages/Information";

import GlobalStyle from "@theme/GlobalStyle";
import theme from "@theme/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Information />
      </ThemeProvider>
    </>
  );
}

export default App;
