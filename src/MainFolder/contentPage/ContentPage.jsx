import React from 'react'
import { useState, createContext } from "react";
import Content from './Content';
import { Routes, Route } from 'react-router-dom';


const MainContext = createContext();

const ContentPage = () => {

    let [conpage, setconpage] = useState(0);

    return (
        <>
            <div className="content">
                
                <MainContext.Provider value={{ conpage, setconpage }}>
                    <Routes>
                        <Route path='/' element={<Content />} />
                    </Routes>

                </MainContext.Provider>

            </div>
        </>
    )
}

export { ContentPage, MainContext };