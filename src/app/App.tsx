import React from "react";
import "./App.scss";
import Header from "../widgets/Header/Header.tsx";
import Main from "../widgets/Main/Main.tsx";
import Footer from "../widgets/Footer/Footer.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
