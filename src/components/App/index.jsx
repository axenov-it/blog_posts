import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Router from "../Router";
import styles from "./styles.module.css";

function App() {
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
