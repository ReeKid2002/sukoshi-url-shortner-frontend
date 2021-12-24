import React from "react";
import Header from "./components/Header/Header";
import RequestForm from "./components/RequestForm/RequestForm";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import "./styles.css";
function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Intro className="container__left"/>
                <RequestForm className="container__right"/>
            </div>
            <Footer />
        </div>
    );
}

export default App;