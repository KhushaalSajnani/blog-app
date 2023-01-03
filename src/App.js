import React, {useState} from "react";
import "./App.css"
import {Header} from "./Components/Header/Header";
import {Home} from "./Components/Home/Home";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import New from "./Components/NewBlog/New";
import {Blogs} from "./Components/Blogs/Blogs";


function App() {
  return (
    <React.Fragment>
        <div className="main-container">
            <Header/>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route index element={<Home/>} />
                  <Route path="/blogs" element={<Blogs />} />
                </Routes>
            </BrowserRouter>
        </div>
    </React.Fragment>
  );
}

export default App;
