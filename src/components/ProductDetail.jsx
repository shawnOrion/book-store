import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProducts } from "../ProductsContext.jsx";

const Container = styled.div``;

export default function ProductDetail(props) {
  const { id } = useParams();
  const { products } = props;

  const product = products.find((product) => product.isbn13 === id);
}
