import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import AnalyticsDashboard from "./components/pages/analytics-dashboard/AnalyticsDashboard"

import RootLayout from "./components/pages/RootLayout"
import { getThemeObject } from "./config/styled/themeValues"
import { routes } from "./utility/constants"

import MainPage, {
  loader as mainPageLoader,
} from "./components/pages/main-page/MainPage"
import ActivityMap, {
  loader as activityMapLoader,
} from "./components/pages/activity-map/ActivityMap"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: routes.home,
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: routes.map,
        element: <ActivityMap />,
        loader: activityMapLoader,
      },
      {
        path: routes.dashboard,
        element: <AnalyticsDashboard />,
      },
    ],
  },
])

function App() {
  return (
    <ThemeProvider theme={getThemeObject("light")}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
