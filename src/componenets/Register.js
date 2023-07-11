import React from "react";
import close from "../images/close.png";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="login_form_div_">
      <img className="login_in_close_icon" src={close} />
      <form>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="First name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example2" label="Last name" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address"
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password"
        />

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form3Example5"
          label="Subscribe to our newsletter"
          defaultChecked
        />

        <MDBBtn type="submit" className="mb-4" block>
          SIGN UP
        </MDBBtn>

        <div className="text-center">
          <p className="not_memeber_text">
            Not a member?{" "}
            <a href="#!" className="reg_text">
              Register
            </a>
          </p>
          <p className="sign_up_text_">or sign up with:</p>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </div>
      </form>
    </div>
  );
}
