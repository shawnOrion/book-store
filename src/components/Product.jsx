import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

export default function Product(props) {
  const {
    isbn13,
    title,
    price,
    authors,
    thumbnail,
    categories,
    average_rating,
    ratings_count,
  } = props;
  return (
    <Link to={`/products/${isbn13}`}>
      <Container>
        <div className="image-wrapper">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="content">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
          <p className="authors">{authors}</p>
          <div className="stars">
            <span className="rating">{average_rating}/5</span>
          </div>
        </div>
      </Container>
    </Link>
  );
}
