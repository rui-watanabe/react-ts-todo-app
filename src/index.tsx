import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { AppSateProvider } from "./AppStateContext"

ReactDOM.render(
  <AppSateProvider>
    <App />
  </AppSateProvider>,
  document.getElementById("root")
)
