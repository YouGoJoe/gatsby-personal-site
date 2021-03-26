import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

import "normalize.css"

const Layout = ({children}) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
