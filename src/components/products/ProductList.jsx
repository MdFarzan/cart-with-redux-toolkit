import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import SingleProduct from "./SingleProduct";
import { products } from "../../data/products.js";

export default function ProductList(props) {
  return (
    <section className="products-list">
      <MDBRow className="mb-3">
        {products.map((item, index) => {
          return <SingleProduct item={item} key={`product-list-${index}`} />;
        })}
      </MDBRow>
    </section>
  );
}
