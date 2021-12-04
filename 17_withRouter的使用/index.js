//引入react 核心库
import React from 'react'

//引入ractDOM
import reactDom from 'react-dom'

//引入 APP
import App from './App'

import { BrowserRouter } from "react-router-dom";

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root')
     )