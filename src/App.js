import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { NavbarComponent } from './components'
import { Home } from './pages'
// import { Home, Berhasil } from './pages'

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/"  element={<Home/>} exact />
          {/* <Route path="/berhasil"  element={<Berhasil/>} exact /> */}
        </Routes>
      </Router>
    )
  }
}