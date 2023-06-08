import React, { useState } from "react";
import { Container } from "@mui/system";
import "../../../css/partners.css";
import { NavbarOthersBanner } from "./banner";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";

const notify = () => {
  toast.info("We will be in contact soon !", {
    position: "top-right",
    autoClose: 1500,
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

export function PartnershipPage() {
  /** INITIALIZATIONS */
  const classes = useStyles();

  // Til qiymatlari va tilni yangilash funktsiyasi
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  // Input qiymatlarini tozalash funktsiyasi
  const resetForm = () => {
    setCompanyName("");
    setPhone("");
    setEmail("");
    setAdditionalInfo("");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Ma'lumotlarni yuborish
    // ...
    // Formani tozalash
    event.target.reset();
    resetForm();
  };

  return (
    <div>
      <NavbarOthersBanner />
      <Container>
        <div className="partenrs">
          <h2>Partnership</h2>
          <p>We are glad to see you here !</p>
          <div className="partners__block">
            <div className="partners-form">
              <div className="partners__logo">
                <img src="./images/logo_lazzat.png" alt="" />
              </div>

              <div className="partners__desc">
                <p>
                  Would you like to become our partner? Fill out the form below
                  and we will get back to you shortly.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                {/* Inputlarni yangilash */}
                <div className="mt-20">
                  <div className="form-field form-field--large">
                    <label className="form-field__label">Company name</label>
                    <div className="input-group">
                      <input
                        className="form-field__input"
                        placeholder="Company name"
                        name="companyName"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field--large">
                    <label className="form-field__label">Phone</label>
                    <div className="input-group">
                      <input
                        className="form-field__input"
                        placeholder="Phone"
                        name="phone"
                        type="number"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field form-field--large">
                    <label className="form-field__label">Email</label>
                    <div className="input-group">
                      <input
                        className="form-field__input"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-field__label">
                      Additional information
                    </label>
                    <div className="input-group">
                      <textarea
                        className="form-field__textarea"
                        placeholder="Additional information"
                        name="additionalInfo"
                        value={additionalInfo}
                        onChange={(event) =>
                          setAdditionalInfo(event.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>

                  <div className="partner_btn">
                    <button
                      type="submit"
                      className="btn-order"
                      onClick={notify}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </Container>
    </div>
  );
}
