import React from 'react';
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import "../styles/Headline.css"
import { Icon, InlineIcon } from '@iconify/react';
import arrowRightCircle from '@iconify/icons-bi/arrow-right-circle';

const Headline = ({data}) => {
  const postArray = []
  const posts = data.allMarkdownRemark.edges;
  posts.map((node) =>{postArray.push(node)})
  return (
      <div>
      <BackgroundImage className="headlineImage"
        style={{backgroundSize: "cover"}}
        fluid={postArray[0].node.frontmatter.featuredImage.childImageSharp.fluid}
      >
      <div className="black-overlay">
      <div className="content-box">
        <div className="headlineTags">
          <h3>Featured</h3>
          <h3>{postArray[0].node.frontmatter.tags[0]}</h3>
        </div>
        <h1 id="headlineTitle">{postArray[0].node.frontmatter.title}</h1>
        <div className="headlineDetails">
          <Img fluid={postArray[0].node.frontmatter.authorImage.childImageSharp.fluid}></Img>
          <div className="authorDate">
            <h6>Posted on {postArray[0].node.frontmatter.date}</h6>
            <h6>By {postArray[0].node.frontmatter.author}</h6>
          </div>
        </div>
        <div className="headlineDescription">
          <p>{postArray[0].node.frontmatter.description}</p>
          <Link id="continueLink" style={{ textDecoration: 'none'}} to={postArray[0].node.fields.slug}>Continue<Icon id='arrow' icon={arrowRightCircle} style={{color: '#ffff', fontSize: '20px'}} /></Link>
        </div>
      </div>
      </div>
      </BackgroundImage>  
      </div>
  );
};

export default Headline;
