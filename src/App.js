import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import { Provider } from "react-redux"
import { store } from "./store"

import Header from "./components/Header/Header"
import Scroll from "./components/Scroll/Scroll"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
        <Scroll />
      </Router>
    </Provider>
  )
}

export default App;
