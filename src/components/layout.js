/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar"
import "./layout.css"
import "../styles/index.scss"
import { Container } from "reactstrap"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Container style ={{padding:0}}>
      <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
        {children}
      </div>
    </Container>
    <footer>
      © {new Date().getFullYear()} Exist News
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
