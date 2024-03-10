import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { getCartSelector } from "../../redux/slices/cartSlice";

export default function CartSummary() {
  const cart = useSelector(getCartSelector);
  let total = cart.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <MDBCol sm="12">
      <MDBCard className="mb-4">
        <MDBCardHeader>
          <MDBTypography tag="h5" className="mb-0">
            Summary
          </MDBTypography>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <h5>{total}</h5>
              </span>
            </MDBListGroupItem>
          </MDBListGroup>

          <MDBBtn block size="lg">
            Give a Star
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
