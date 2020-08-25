import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Router from "../Router";
import styles from "./styles.module.css";

function App() {
  // const [data, setData] = useState("no data");

  // const changeData = () => {
  //   setData("Data is changed");
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className={styles.app__main}>
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
