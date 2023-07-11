import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../images/enter.png";
import register from "../images/register.png";
import myfavourite from "../images/heart.png";
import settings from "../images/setting.png";
import faq from "../images/faq.png";
import logout from "../images/power-off.png";


import close from "../images/close.png";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function ModelLinks() {
  const [showModel, setShowModel] = useState(false);
  const [showMode2, setShowMode2] = useState(false);

  const handleLoginClick = () => {
    setShowModel(true);
  };
  const handleProfileIconClick = () => {
    setShowModel(false);
  };

  const handleLoginClick2 = () => {
    setShowMode2(true);
  };
  const handleProfileIconClick2 = () => {
    setShowMode2(false);
  };

  const navigate = useNavigate();

  const ShowFaq = () => {
    navigate("/Faq", { replace: true });
  };

  return (
    <div>
      <div className="model_link_gen_div">
        <ul className="new_model_ul">
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={login} />
              <a className="new_model_a" href="#" onClick={handleLoginClick}>
                Login
              </a>
              {showModel && (
                <div className="login_form_div_">
                  <img
                    className="login_in_close_icon"
                    src={close}
                    onClick={handleProfileIconClick}
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
                        Not a member?
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
              )}
            </div>
          </li>

          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={register} />

              <a className="new_model_a" href="#" onClick={handleLoginClick2}>
                Register
              </a>
              {showMode2 && (
                <div className="login_form_div_">
                  <img
                    className="login_in_close_icon"
                    src={close}
                    onClick={handleProfileIconClick2}
                  />
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
              )}
            </div>
          </li>

          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={myfavourite} />
              <a className="new_model_a" href="#">
                My Favourite
              </a>
            </div>
          </li>
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={settings} />
              <a className="new_model_a" href="#">
                Settings
              </a>
            </div>
          </li>
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={faq} />
              <a className="new_model_a" href="#" onClick={ShowFaq}>
                FAQ
              </a>
            </div>
          </li>
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={logout} />
              <a className="new_model_a" href="#">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModelLinks;
