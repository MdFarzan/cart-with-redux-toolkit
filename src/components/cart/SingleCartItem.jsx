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
  const { item } = { ...props };

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
          <strong>{item.price}</strong>
        </p>
      </MDBCol>
      <hr className="my-4" />
    </MDBRow>
  );
}
