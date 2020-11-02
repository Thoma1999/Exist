import React from 'react';
import Blogpost from '../components/Blogpost'
import Layout from '../components/layout';
// import Gallery from '../components/gallery'
import {Col,Row} from 'reactstrap'
import {graphql, StaticQuery } from "gatsby"
import PaginationLinks from '../components/PaginationLinks'

const BlogCardTemplate = (props) => {
  const posts = props.data.allMarkdownRemark.edges;
  const { currentPage, numPages } = props.pageContext
  return (
    <Layout pageTitle={`page: ${currentPage}`}>
    <Row>
        <Col md={8}>
            {posts.map(({node}) =>(
                <Blogpost
                    key = {node.id}
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    date={node.frontmatter.date}
                    slug={node.fields.slug}
                    author={node.frontmatter.author}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                    body={node.excerpt}
                />
                ))}
      <PaginationLinks numPages={numPages} currentPage={currentPage}></PaginationLinks>         
        </Col>
      </Row>
    </Layout>
  );
};
export default BlogCardTemplate;

export const indexQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
        fields {
          slug
        }
      }
    }
  }
}
`

