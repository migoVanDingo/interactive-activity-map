import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "./components/pages/main-page/MainPage"
import ActivityMap from "./components/pages/activity-map/ActivityMap"
import AnalyticsDashboard from "./components/pages/analytics-dashboard/AnalyticsDashboard"
import RootLayout from "./components/pages/RootLayout"
import { ThemeProvider } from "styled-components"
import { getThemeObject } from "./config/styled/themeValues"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/activity-map", element: <ActivityMap /> },
      { path: "/analytics-dashboard", element: <AnalyticsDashboard /> },
    ],
  },
])

function App() {
  return <ThemeProvider theme={getThemeObject("light")}>
    <RouterProvider router={router} />
  </ThemeProvider>
  
}

export default App
