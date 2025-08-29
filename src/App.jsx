import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Subject from "./pages/Subject";
import { ThemeProvider } from "./theme/Themeprovides";
import Dashboard from "./pages/Dashboard";
import Addquestion from "./pages/Addquestion";
import UrlProvider from "./context";
import Profile from "./pages/Profile";
import GuestRoute from "./components/GuestRoute";
import RequireAuth from "./components/RequireAuth";
import Admin from "./pages/Admin";
import RequireAdmin from "./components/RequireAdmin";
import Addsubject from "./pages/Addsubject";
import Addsubtopic from "./pages/Addsubtopic";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/auth/:mode", element: <Auth /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/add-question", element: <Addquestion /> },
      { path: "/subject/:id", element: <RequireAuth><Subject /></RequireAuth> },
      { path: "/profile", element: <Profile/>},
      { path: "/admin", element: <RequireAdmin><Admin/></RequireAdmin>},
      { path: "/admin/addQuestion", element: <RequireAdmin><Addquestion/></RequireAdmin>},
      { path: "/admin/addSubject", element: <RequireAdmin><Addsubject/></RequireAdmin>},
      { path: "/admin/addSubtopic", element: <RequireAdmin><Addsubtopic/></RequireAdmin>},
      
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <ThemeProvider>
        {/* ✅ Wrap your app here */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </UrlProvider>
  );
}

export default App;
