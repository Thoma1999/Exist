import React from 'react';

import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import "../styles/Headline.css"
const Headline = ({data}) => {
  const postArray = []
  const posts = data.allMarkdownRemark.edges;
  posts.map((node) =>{postArray.push(node)})
  return (
      <div>
      <BackgroundImage className="headlineImage"
        fluid={postArray[0].node.frontmatter.featuredImage.childImageSharp.fluid}
      >
        <div className="headlineTags">
            <h3>Featured</h3>
            <h3>{postArray[0].node.frontmatter.tags[0]}</h3>
        </div>
        <h2 id="headlineTitle">{postArray[0].node.frontmatter.title}</h2>
        <div className="HeadlineDetails">

            <div className="authorDate">
            </div>
        </div>
      </BackgroundImage>  
      </div>
  );
};

export default Headline;