import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";

export function Products () {
  return(
    <>
      <h1>Products List</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.identifier}>
            <Link to={`/products/${product.identifier}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}