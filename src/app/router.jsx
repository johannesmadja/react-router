import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "../features/home/pages/HomePage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import ErrorBoundary from "../components/ui/ErrorPage";

export const ROUTER = createBrowserRouter([
    {
        path : "/", 
        Component : App,
        ErrorBoundary : ErrorBoundary,
        children : [
            {
                index: true,
                Component : HomePage
            }, 
             {
                path : "profile", 
                Component : ProfilePage,
                caseSensitive: true
            }, 
        ]
    }
])