import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"

import "normalize.css"

const Layout = ({children}) => (
  <>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
