import React from 'react'
import './styles/reset.css'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import { Pokemon } from './Page/Pokemon/index'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Pokemon/:id" element={<Pokemon />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
