import { NavLink } from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { Container } from "@mui/material";
import moment from "moment";

export function Footer(props: any) {
  return (
    <div className="footer">
      <Container>
        <div className="footer__container">
          <div className="footer__logo" onClick={props.setPath}>
            <NavLink to={"/"} className="header-logo logo_white">
              <img className="logo" src="/images/logo1.png" alt="" />
            </NavLink>
            <div className="footer__social">
              <ul className="footer-social__items">
                <li>
                  <a
                    href="https://www.facebook.com/sarvar19"
                    className="social-link"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@SarvarObidjonov"
                    className="social-link"
                  >
                    <AiFillYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sarvar_obidjonov1"
                    className="social-link"
                  >
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/sarvarobidjonov"
                    className="social-link"
                  >
                    <BsTelegram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links">
            <strong>Halal Certificates</strong>
            <ul>
              <li>
                <NavLink to={"/certificates"} onClick={props.setPath}>
                  Salami and Sausage
                </NavLink>
              </li>
              <li>
                <NavLink to={"/certificates"} onClick={props.setPath}>
                  Meat
                </NavLink>
              </li>
              <li>
                <NavLink to={"/certificates"} onClick={props.setPath}>
                  Diary Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/certificates"} onClick={props.setPath}>
                  Other Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <strong>TERMS AND POLICY</strong>
            <ul>
              <li>
                <NavLink to={"/terms"} onClick={props.setPath}>
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink to={"/privacy"} onClick={props.setPath}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to={"/delivery-policy"} onClick={props.setPath}>
                  Delivery Policy
                </NavLink>
              </li>
              <li>
                <NavLink to={"/partners"} onClick={props.setPath}>
                  Partnership
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__links f__contact">
            <strong>CONTACT US</strong>
            <ul>
              <li>
                <p>PLUS LAZZATFOO CO.LTD</p>
              </li>
              <li>
                <p>Phone : (+82) 010 5448 9811</p>
              </li>
              <li>
                <p>Business License : 123-45-67890 </p>
              </li>
              <li>
                <p>Email : obidjonov@naver.com</p>
              </li>
              <li>
                <p>
                  Address : 317 브로드웨이, <br /> 로스앤젤레스, CA 90013, 미국
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="liner"></div>
        <div className="copyrights" style={{ marginTop: "15px" }}>
          Copyrights Lazzatfood 2022 - {moment().format("YYYY")}. All rights
          reserved
        </div>
      </Container>
    </div>
  );
}
