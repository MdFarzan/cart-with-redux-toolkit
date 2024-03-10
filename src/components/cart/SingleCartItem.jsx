import {
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import {
  decQty,
  getCartSelector,
  incQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import "./SingleCartItem.style.css";

export default function SingleCartItem(props) {
  const { item } = { ...props };
  const dispatch = useDispatch();

  const incItemQty = (item_id) => {
    dispatch(incQty({ id: item_id }));
  };
  const decItemQty = (item_id) => {
    dispatch(decQty({ id: item_id }));
  };

  const removeItemFromCart = (item_id) => {
    dispatch(removeFromCart({ id: item_id }));
  };

  return (
    <MDBRow>
      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
        <MDBRipple
          rippleTag="div"
          rippleColor="light"
          className="bg-image rounded hover-zoom hover-overlay"
        >
          <img src={item.img} className="w-100" />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
        </MDBRipple>
      </MDBCol>

      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
        <p>
          <strong>{item.name}</strong>
        </p>

        <MDBBtn
          wrapperProps={{ size: "sm" }}
          wrapperClass="me-1 mb-2"
          title="Remove item"
          color="danger"
          onClick={() => {
            removeItemFromCart(item.id);
          }}
        >
          <MDBIcon fas icon="trash" />
        </MDBBtn>
      </MDBCol>
      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
        <div className="d-flex mb-4">
          <MDBBtn
            className="px-3 me-2 cart-inc-btn"
            onClick={() => {
              decItemQty(item.id);
            }}
          >
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <MDBInput
            defaultValue={1}
            min={1}
            value={item.qty}
            type="number"
            label="Quantity"
            className="cart-qty"
          />

          <MDBBtn
            className="px-3 ms-2 cart-dec-btn"
            onClick={() => {
              incItemQty(item.id);
            }}
          >
            <MDBIcon fas icon="plus" />
          </MDBBtn>
        </div>

        <p className="text-start text-md-center">
          <strong>
            <h5>₹ {item.price * item.qty}</h5>
          </strong>
        </p>
      </MDBCol>
      <hr className="my-4" />
    </MDBRow>
  );
}
