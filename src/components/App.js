import React from "react";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";

const Wrapper = styled.div``;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Header />
            <Routes />
            <Footer />
          </Wrapper>
        </Router>
    </ThemeProvider>
  );
};
export default App;
