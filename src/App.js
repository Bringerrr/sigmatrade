import React, { useRef, useEffect, useState } from 'react'
import './App.css'
import './App.scss'
import 'antd/dist/antd.css'
import { BrowserRouter, Route } from 'react-router-dom'

import CatalogDisplay from './containers/CatalogDsiaplay'
import CatalogDisplay1 from './containers/CatalogDisplay1'
import MainHeader from './containers/MainHeader'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <div>
          <CatalogDisplay />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
