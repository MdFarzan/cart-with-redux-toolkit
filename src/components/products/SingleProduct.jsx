import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./SingleProduct.style.css";
import { useState } from "react";

import {
  removeFromCart,
  incQty,
  decQty,
  addToCart,
} from "./../../redux/slices/cartSlice.js";
import { useDispatch } from "react-redux";

export default function SingleProduct(props) {
  const { item } = { ...props };
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    setAddedToCart(true);
    dispatch(addToCart({ id: 45 }));
  };

  const removeFromCart = () => {
    setAddedToCart(false);
    dispatch();
  };

  return (
    <MDBCol lg="4">
      <MDBCard className="single-product mb-4">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            className="product-img"
            src={item.img}
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle className="product-title">{item.name}</MDBCardTitle>

          <div className="mt-3 d-grid gap-2">
            {addedToCart ? (
              <MDBBtn
                color="danger"
                onClick={() => {
                  removeFromCart();
                }}
              >
                Remove
              </MDBBtn>
            ) : (
              <MDBBtn color="primary" onClick={() => addItemToCart()}>
                Add to Cart
              </MDBBtn>
            )}
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
