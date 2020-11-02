import React from "react"
import {graphql, StaticQuery } from "gatsby"
import Blogpost from "../components/Blogpost"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Col, Row} from 'reactstrap';
import Gallery from "../components/gallery"
import PaginationLinks from '../components/PaginationLinks'


const IndexPage = () => {
  const postsperPage = 5
  let numberofPages
  return (
    <Layout>
    <SEO title="Home" />
    <StaticQuery
        query={indexQuery}
        render ={data => 
          <Gallery data={data}/>
        }  
      />  
    <Row>
    <Col md={8}>
    <StaticQuery
        query={indexQuery}
        render ={data => {
          numberofPages = Math.ceil(data.allMarkdownRemark.totalCount/postsperPage)
          const posts = data.allMarkdownRemark.edges.slice(3);
          return (
            <div>
              {posts.map(({node}) =>(
                <Blogpost 
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  body={node.excerpt}
                />
              ))}
            <PaginationLinks numPages={numberofPages} currentPage={1}></PaginationLinks>
            </div>
          )
        }}
      />  
    </Col>
    <Col md={4}>
      Sidebar here
    </Col>
    </Row>
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
            featuredImage{
              childImageSharp{
                fluid(maxWidth: 600){
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
