import React, { useState} from "react";
import close from "../images/close.png";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function LoginForm() {
  return (
    <>
      <div className="login_form_div_">
        <img
          className="login_in_close_icon"
          src={close}
        />
        <form>
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            label="Email address"
            placeholder="Email address"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            label="Password"
            placeholder="Password"
          />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form2Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!" className="forgot_pw">
                Forgot password?
              </a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4" block>
            Sign in
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
    </>
  );
}
