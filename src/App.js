import React, { useRef, useEffect, useState } from 'react'
import './App.css'
import './App.scss'
import 'antd/dist/antd.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import CatalogDisplay from './containers/CatalogDsiaplay'
import MainHeader from './containers/MainHeader'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainHeader />
          <div>
            <CatalogDisplay />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
