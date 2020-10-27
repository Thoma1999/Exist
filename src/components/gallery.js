import React from "react"
import { Container, Row, Col } from 'reactstrap';
import '../styles/gallery.scss';
import Img from "gatsby-image"

const Gallery = ({data}) => {
  const postArray = []
  const posts = data.allMarkdownRemark.edges;
  posts.map((node) =>{postArray.push(node)})
  return (
    <Container>
    <Row id="galleryMainR">
      <Col md={8}>
        <Row className="largeHeadlineR">
        <Img fluid={postArray[0].node.frontmatter.featuredImage.childImageSharp.fluid}/>
          <div className="headlineDetails">
            <h3>{postArray[0].node.frontmatter.title}</h3>
            <span className="tag">Technology</span>
          </div>
        </Row>
      </Col>
      <Col md={4}>
        <Row className="smallHeadlineR">
        <Img fluid={postArray[1].node.frontmatter.featuredImage.childImageSharp.fluid}/>
          <div className="headlineDetails">
            <h3>{postArray[1].node.frontmatter.title}</h3>
            <span className="tag">Technology</span>
          </div>
        </Row>
        <Row className="smallHeadlineR">
        <Img fluid={postArray[2].node.frontmatter.featuredImage.childImageSharp.fluid}/>
          <div className="headlineDetails">
            <h3>{postArray[2].node.frontmatter.title}</h3>
            <span className="tag">Technology</span>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>

  );
}

export default Gallery





