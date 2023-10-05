import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { NavbarComponent } from './components'
import { Home, Berhasil } from './pages'

export default class App extends Component {
  render() {
    return (
      // <Routes>
      //     <NavbarComponent />
      //     <main>
      //         <Route  path="/" component={Home} exact/>
      //         <Route  path="/berhasil" component={Berhasil} exact/>
      //     </main>
      // </Routes>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/"  element={<Home/>} exact />
          <Route path="/berhasil"  element={<Berhasil/>} exact />
        </Routes>
      </Router>
    )
  }
}