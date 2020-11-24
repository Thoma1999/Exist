import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const Blogpost = ({title, description, date, slug, fluid, author, tags, body}) => {
  return (
    <div>
      <Card>
        <Link to={slug}><Img fluid={fluid} alt="Card image cap" /></Link>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle className="tags">
                {tags.map((tag, i) => [
                <h6 key={i}>
                  {tag}
                </h6>
                ])}
          </CardSubtitle>
          <CardText>By {author} on {date}</CardText>
          <CardText>{description}</CardText>
          <a href={slug} className="button">READ MORE</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Blogpost;