import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "../features/home/pages/HomePage";
import ProfilePage from "../features/profile/pages/ProfilePage";

export const ROUTER = createBrowserRouter([
    {
        path : "/", 
        element : <App/>,
        children : [
            {
                path : "/", 
                element : <HomePage/>
            }, 
             {
                path : "/profile", 
                element : <ProfilePage/>
            }, 
        ]
    }
])