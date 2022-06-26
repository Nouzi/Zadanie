import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import axios from 'axios'
import { Stack, Typography, useAutocomplete, } from '@mui/material'
import Items from './Items'


const root = ReactDOM.createRoot(document.getElementById('root'));


function App() {  



  return(
    <Typography component="div">
      <Items />
    </Typography>
  )
}

root.render(<App />);