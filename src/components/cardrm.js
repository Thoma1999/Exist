import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {Link} from "gatsby";
import Img from 'gatsby-image'

const Cardrm = ({title, description, date, slug, fluid, author, body}) => {
  return (
    <div>
      <Card>
        <Img fluid={fluid} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Category</CardSubtitle>
          <CardText>By {author} on {date}</CardText>
          <CardText>{description}</CardText>
          <Link to={slug}>READ MORE</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cardrm;