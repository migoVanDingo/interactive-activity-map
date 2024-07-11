import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App.tsx"
import "./index.css"
import store from "./store/store"
import { StrictMode } from "react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
