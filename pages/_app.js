import React from 'react'
import Context, { ContextProvider } from '../components/context/context'

import '../styles/globals.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>


  function MyApp({Component, pageProps}) {
  
  

  return (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
    )}

  export default MyApp
