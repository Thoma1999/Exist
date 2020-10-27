import React from "react"
import {graphql, StaticQuery } from "gatsby"
import Cardrm from "../components/cardrm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Col, Row} from 'reactstrap';
import Gallery from "../components/gallery"

const IndexPage = () => {
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
          const posts = data.allMarkdownRemark.edges.slice(3);
          return (
            <div>
              {posts.map(({node}) =>(
                <Cardrm 
                  title={node.frontmatter.title}
                  description={node.frontmatter.description}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  body={node.excerpt}
                />
              ))}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
