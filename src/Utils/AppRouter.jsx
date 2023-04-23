import React from 'react'
import { Route, Routes } from "react-router-dom";
import { RoutesList } from '../Routes/Route';
import Login from "../Pages/Login/Login";
const AppRouter = () => {
    return (
        <Routes>
            {
                RoutesList.map((el) =>
                    <Route path={el.path} element={el.element} key={el.path} />
                )
            }
            <Route path={"*"} element={<Login />} />
        </Routes>

    )
}

export default AppRouter
