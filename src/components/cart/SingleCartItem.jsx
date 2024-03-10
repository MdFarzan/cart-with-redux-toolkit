import {
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";

export default function SingleCartItem(props) {
  return (
    <MDBRow>
      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
        <MDBRipple
          rippleTag="div"
          rippleColor="light"
          className="bg-image rounded hover-zoom hover-overlay"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
            className="w-100"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
        </MDBRipple>
      </MDBCol>

      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
        <p>
          <strong>Red hoodie</strong>
        </p>
        <p>Color: red</p>
        <p>Size: M</p>

        <MDBTooltip
          wrapperProps={{ size: "sm" }}
          wrapperClass="me-1 mb-2"
          title="Remove item"
        >
          <MDBIcon fas icon="trash" />
        </MDBTooltip>
      </MDBCol>
      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
        <div className="d-flex mb-4">
          <MDBBtn className="px-3 me-2">
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

          <MDBBtn className="px-3 ms-2">
            <MDBIcon fas icon="plus" />
          </MDBBtn>
        </div>

        <p className="text-start text-md-center">
          <strong>$17.99</strong>
        </p>
      </MDBCol>
      <hr className="my-4" />
    </MDBRow>
  );
}
