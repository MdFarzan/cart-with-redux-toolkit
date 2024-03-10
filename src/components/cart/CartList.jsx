import React from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import SingleCartItem from "./SingleCartItem";
import CartSummary from "./CartSummary";

export default function CartList() {
  return (
    <section className="cart-list">
      <MDBRow className="justify-content-center my-4">
        <MDBCol sm="12">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                Cart - 2 items
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <SingleCartItem />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <CartSummary />
      </MDBRow>
    </section>
  );
}
