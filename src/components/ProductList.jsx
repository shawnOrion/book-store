import Product from "./Product.jsx";
import styled from "styled-components";
const Container = styled.div``;

export default function ProductList(props) {
  const { products } = props;

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.isbn13} {...product} />
      ))}
    </Container>
  );
}
