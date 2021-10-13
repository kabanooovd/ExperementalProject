import React from 'react';
import st from './App.module.css';
import {MyHeader} from "./HeaderComponent/MyHeader";
import {MainContent} from "./Main/Main";
import {HashRouter} from "react-router-dom";

function App() {


    return (
        <div className={st.App}>
            <MyHeader/>
            <HashRouter>
                <MainContent/>
            </HashRouter>
        </div>
);
}

export default App;
