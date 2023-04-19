import MainPage from "pages/Main";
import ToDoDetail from "pages/ToDoDetail";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/todo" element={<ToDoDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
