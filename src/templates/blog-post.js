import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/post.scss';
import {Col, Row} from 'reactstrap';


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Row id="postMainR">
      <Col md={8}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div className="tags">
                {post.frontmatter.tags.map((tag, i) => [
                <h6 key={i}>
                  {tag}
                </h6>
                ])}
          </div>
          <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>
          <div id="postDetails">
          <img src='/blank.png'/>
          <div id="postDate">
            <p>Posted on {post.frontmatter.date}</p>
            <p>By {post.frontmatter.author}</p>    
          </div>
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        </footer>
      </article>
      </Col>
      <Col md={4}>
        <div>
        Sidebar here
        </div>
      </Col>
      </Row>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        author
        tags
        featuredImage{
          childImageSharp{
            fluid(maxWidth: 400, maxHeight: 300, cropFocus: CENTER, quality: 80, fit: COVER){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
