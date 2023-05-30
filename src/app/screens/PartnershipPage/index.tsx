import React from "react";
import { Container } from "@mui/system";
import "../../../css/partners.css";
import { NavbarOthersBanner } from "./banner";

export function PartnershipPage() {
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
              <form>
                <div className="mt-20">
                  <div className="form-field form-field--large">
                    <label className="form-field__label">Company name</label>
                    <div className="input-group">
                      <input
                        className="form-field__input"
                        placeholder="Company name"
                        name="companyName"
                        value=""
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
                        value=""
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
                        value=""
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
                      ></textarea>
                    </div>
                  </div>

                  <div className="partner_btn">
                    <button type="submit" className="btn-order">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
