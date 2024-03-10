import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import SingleProduct from "./SingleProduct";

export default function ProductList(props) {
  return (
    <section className="products-list">
      <MDBRow className="mb-3">
        <MDBCol lg="4">
          <SingleProduct />
        </MDBCol>
      </MDBRow>
    </section>
  );
}
