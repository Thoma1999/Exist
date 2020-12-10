import React from "react"
import {graphql, StaticQuery } from "gatsby"
import Blogpost from "../components/Blogpost"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Col, Row} from 'reactstrap';
import PaginationLinks from '../components/PaginationLinks'
import Headline from "../components/Headline"


const IndexPage = () => {
  const postsperPage = 5
  let numberofPages
  return (
    <Layout>
    <SEO title="Home" />
    <StaticQuery
        query={indexQuery}
        render ={data => {
          numberofPages = Math.ceil(data.allMarkdownRemark.totalCount/postsperPage)
          const posts = data.allMarkdownRemark.edges.slice(3);
          return (
            <div>
            <Headline data={data}/>      
            <PaginationLinks numPages={numberofPages} currentPage={1}></PaginationLinks>
            </div>
          )
        }}
      />  
  </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { 
        fields: [frontmatter___date], order: DESC }
        limit: 5              
        ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            authorImage{
              childImageSharp{
                fluid(quality:100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            featuredImage{
              childImageSharp{
                fluid(quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
