import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { ToastContainer, toast } from "react-toastify";
import { Fab, Stack, TextField } from "@mui/material";

const notify = () => {
  toast.info("Login via SNS will be launched soon!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function AuthenticationModal(props: any) {
  /** INITIALIZATIONS */
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const [mb_nick, set_mb_nick] = useState<string>("");
  const [mb_phone, set_mb_phone] = useState<number>(0);
  const [mb_password, set_mb_password] = useState<string>("");

  /** HANDLERS */
  const handleUsername = (e: any) => {
    set_mb_nick(e.target.value);
  };
  const handlePhone = (e: any) => {
    set_mb_phone(e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password(e.target.value);
  };

  const handleSignupRequest = async () => {
    try {
      const is_fulfilled = mb_nick != "" && mb_password != "" && mb_phone != 0;
      assert.ok(is_fulfilled, Definer.input_err1);

      const signup_data = {
        mb_nick: mb_nick,
        mb_phone: mb_phone,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApiService();
      await memberApiService.signupRequest(signup_data);

      props.handleSignUpClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
      props.handleSignUpClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const is_fulfilled = mb_nick !== "" && mb_password !== "";
      assert.ok(is_fulfilled, Definer.input_err1);

      const login_data = {
        mb_nick: mb_nick,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApiService();
      await memberApiService.loginRequest(login_data);

      props.handleLoginClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
      props.handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordKeyPressHandler = (e: any) => {
    if (e.key == "Enter" && props.signUpOpen) {
      handleSignupRequest().then();
    } else if (e.key == "Enter" && props.loginOpen) {
      handleLoginRequest().then();
    }
  };

  return (
    <div>
      {/*@ts-ignore*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.loginOpen}
        onClose={props.handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.loginOpen}>
          <div className="user-form">
            <div className="form-wrapper login-container">
              <div className="user login">
                <div className="img-box">
                  <img src="/images/sigin.webp" alt="" />
                </div>
                <div className="form-box">
                  <h2 className="welcome">Welcome !</h2>
                  <div className="form-second">
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Login"
                        onChange={handleUsername}
                      />
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          onChange={handlePassword}
                        />
                        <div
                          className="icon form-icon"
                          onClick={togglePassword}
                        >
                          <img
                            src={
                              showPassword
                                ? "/images/hide.svg"
                                : "/images/eye.svg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        onClick={handleLoginRequest}
                      />
                    </div>
                    <div className="form-control">
                      <p>Continue with</p>
                      <div className="icons">
                        <div className="icon" onClick={notify}>
                          <img src="/images/search.svg" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/facebook.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/naver.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/kakotalk.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>

      {/*@ts-ignore*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.signUpOpen}
        onClose={props.handleSignUpClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.signUpOpen}>
          <div className="user-form">
            <div className="form-wrapper signup-container ">
              <div className="user signup">
                <div className="form-box">
                  <h2 className="welcome-second">Welcome to LazzatFood!</h2>
                  <div className="form-second">
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Login"
                        onChange={handleUsername}
                      />
                      <div>
                        <input
                          type="number"
                          placeholder="Phone number"
                          onChange={handlePhone}
                        />
                      </div>
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          onKeyPress={passwordKeyPressHandler}
                          onChange={handlePassword}
                        />
                        <div
                          className="icon form-icon"
                          onClick={togglePassword}
                        >
                          <img
                            src={
                              showPassword
                                ? "/images/hide.svg"
                                : "/images/eye.svg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <input
                        type="Submit"
                        value="Sign Up"
                        onClick={handleSignupRequest}
                      />
                    </div>
                    <div className="form-control">
                      <p>Continue with</p>
                      <div className="icons">
                        <div className="icon" onClick={notify}>
                          <img src="/images/search.svg" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/facebook.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/naver.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/kakotalk.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-box">
                  <img src="/images/sign-up-form.svg" alt="" />
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
