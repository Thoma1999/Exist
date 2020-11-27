import React from "react"
import { Container, Row, Col } from 'reactstrap';
import '../styles/gallery.scss';
import Img from "gatsby-image"
import {Link} from 'gatsby'

const Gallery = ({data}) => {
  const postArray = []
  const posts = data.allMarkdownRemark.edges;
  posts.map((node) =>{postArray.push(node)})
  return (
    <Container>
    <Row id="galleryMainR" className="cardContainer">
      <Col md={8}>
        <Row className="largeHeadlineR">
          <Link to={postArray[0].node.fields.slug}>
            <Img fluid={postArray[0].node.frontmatter.featuredImage.childImageSharp.fluid}/>
            <div className="headlineDetails">
              <h3>{postArray[0].node.frontmatter.title}</h3>
              <span className="tag">
                {postArray[0].node.frontmatter.tags[0]}
              </span>
            </div>
          </Link>
        </Row>
      </Col>
      <Col md={4}>
        <Row className="smallHeadlineR">
          <Link to={postArray[1].node.fields.slug}>
            <Img fluid={postArray[1].node.frontmatter.featuredImage.childImageSharp.fluid}/>
            <div className="headlineDetails">
              <h3>{postArray[1].node.frontmatter.title}</h3>
              <span className="tag">
                {postArray[1].node.frontmatter.tags[0]}
              </span>
            </div>
            </Link>
        </Row>
        <Row className="smallHeadlineR">
          <Link to={postArray[1].node.fields.slug}>
            <Img fluid={postArray[2].node.frontmatter.featuredImage.childImageSharp.fluid}/>
            <div className="headlineDetails">
              <h3>{postArray[2].node.frontmatter.title}</h3>
              <span className="tag">
                {postArray[2].node.frontmatter.tags[0]}
              </span>
            </div>
          </Link>
        </Row>
      </Col>
    </Row>
  </Container>

  );
}

export default Gallery





