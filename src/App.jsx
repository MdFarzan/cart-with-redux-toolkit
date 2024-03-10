import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import ProductList from "./components/products/ProductList";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import { MDBContainer } from "mdb-react-ui-kit";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import CartList from "./components/cart/CartList";

function App() {
  return (
    <>
      <Header />
      <MDBContainer fluid>
        <MDBRow className="p-3">
          <MDBCol lg="8">
            <ProductList />
          </MDBCol>
          <MDBCol lg="4">
            <CartList />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default App;
