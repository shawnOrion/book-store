import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav``;

export default function Navbar() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </Container>
  );
}
