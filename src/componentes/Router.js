import { Routes, Route,BrowserRouter } from "react-router-dom" ;
import React from "react";
import App from "../App";
import Show from "../views/Show";


function Router() {
    return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/show/:id" element={<Show />} />
      </Routes> 
    </BrowserRouter>
)
}
export default Router; 