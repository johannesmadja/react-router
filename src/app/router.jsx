import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "../features/home/pages/HomePage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import ErrorBoundary from "../components/ui/ErrorPage";
import ProfileOverview from "../features/profile/pages/ProfileOverview";
import ProfileData from "../features/profile/pages/ProfileData";
import { HomePageLoader } from "../features/home/loaders/HomePageLoader";
import { ProtectedRoute } from "../features/auth/components/ProtectedRoute";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        loader: HomePageLoader,
        hydrateFallbackElement: <h2>Chargment en cours ...</h2>,
        Component: HomePage,
      },
      {
        path: "profile/:id?",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
        caseSensitive: true,
        children: [
          {
            index: true,
            Component: ProfileOverview,
          },
          {
            path: "data",
            Component: ProfileData,
          },
        ],
      },
      {
        path: "profile/*",
        Component: ProfilePage,
      },
    ],
  },
]);
