import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default MyApp
