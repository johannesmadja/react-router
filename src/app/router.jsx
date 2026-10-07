import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "../features/home/pages/HomePage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import ErrorBoundary from "../components/ui/ErrorPage";
import ProfileOverview from "../features/profile/pages/ProfileOverview";
import ProfileData from "../features/profile/pages/ProfileData";

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
                caseSensitive: true,
                children : [
                    {
                        index: true, 
                        Component: ProfileOverview
                    }, 
                    {
                        path : "data", 
                        Component: ProfileData
                    }
                ]
            }, 
        ]
    }
])