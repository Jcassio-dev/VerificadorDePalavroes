import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ApiInfo } from "../pages/ApiInfo";

export function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/api" element={<ApiInfo/>}/>
        </Routes>
        </BrowserRouter>
    )
}
