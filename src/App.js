import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from "react";
import About from "./components/home/About";
import Home from "./pages/Home";
import Layout from "./ui/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/extra'} element={<About/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
