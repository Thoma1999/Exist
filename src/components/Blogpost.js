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
          <CardSubtitle>{tags.map((tag, i) => [
  <strong key={i}>
    {tag}
    {i < tags.length - 1 ? ', ' : ''}
  </strong>
])}</CardSubtitle>
          <CardText>By {author} on {date}</CardText>
          <CardText>{description}</CardText>
          <a href={slug} className="button">READ MORE</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Blogpost;