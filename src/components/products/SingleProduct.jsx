import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import "./SingleProduct.style.css";
import { useState } from "react";

import {
  removeFromCart,
  incQty,
  decQty,
  addToCart,
  getCartSelector,
} from "./../../redux/slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function SingleProduct(props) {
  const { item } = { ...props };
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = (id, name, img, price) => {
    setAddedToCart(true);
    dispatch(addToCart({ id: id, name: name, img: img, price: price }));
  };

  const removeItemFromCart = (id) => {
    setAddedToCart(false);
    dispatch(removeFromCart({ id: id }));
  };

  const cart = useSelector(getCartSelector);

  let isExistsInCart = cart.findIndex((cartItem) => cartItem.id == item.id);
  isExistsInCart = isExistsInCart == -1 ? false : true;

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
          <MDBRow>
            <MDBCol lg="8">
              <MDBCardTitle className="product-title">{item.name}</MDBCardTitle>
            </MDBCol>
            <MDBCol lg="4">
              <h6>₹ {item.price}</h6>
            </MDBCol>
          </MDBRow>

          <div className="mt-3 d-grid gap-2">
            {isExistsInCart ? (
              <MDBBtn
                color="danger"
                onClick={() => {
                  removeItemFromCart(item.id);
                }}
              >
                Remove
              </MDBBtn>
            ) : (
              <MDBBtn
                color="primary"
                onClick={() =>
                  addItemToCart(item.id, item.name, item.img, item.price)
                }
              >
                Add to Cart
              </MDBBtn>
            )}
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
