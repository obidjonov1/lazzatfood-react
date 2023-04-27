import { NavLink } from "react-router-dom";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { Container } from "@mui/material";

export function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer__container">
          <div className="footer__logo">
            <a href="index.html" className="header-logo logo_white">
              <img
                className="logo"
                src="./images/logo_lazzat_white.png"
                alt=""
              />
            </a>
            <div className="footer__social">
              <ul className="footer-social__items">
                <li>
                  <NavLink to={"#"} className="social-link">
                    <BsFacebook />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"#"} className="social-link">
                    <AiFillYoutube />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"#"} className="social-link">
                    <AiOutlineInstagram />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"#"} className="social-link">
                    <BsWhatsapp />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links">
            <strong>Serifikatlar</strong>
            <ul>
              <li>
                <a href="#">Kolbasa va Sosiskalar</a>
              </li>
              <li>
                <a href="#">Go'sht</a>
              </li>
              <li>
                <a href="#">Sut mahsulotlari</a>
              </li>
              <li>
                <a href="#">Biz haqimizda</a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <strong>
              Xizmat shartlari va
              <br />
              siyosati
            </strong>
            <ul>
              <li>
                <a href="#">Foydalanish shartlari</a>
              </li>
              <li>
                <a href="#">Maxfiylik siyosati</a>
              </li>
              <li>
                <a href="#">Yetkazib berish shartlari</a>
              </li>
              <li>
                <a href="#">Hamkorlik</a>
              </li>
            </ul>
          </div>
          <div className="footer__links f__contact">
            <strong>Biz bilan bog'laning</strong>
            <ul>
              <li>
                <a href="#">PLUS LAZZATFOO CO.LTD</a>
              </li>
              <li>
                <a href="#">Telefon : (+82) 010 5448 9811</a>
              </li>
              <li>
                <a href="#">Litsenziya : 842-85-01676 </a>
              </li>
              <li>
                <a href="#">Email : obidjonov@naver.com</a>
              </li>
              <li>
                <a href="#">
                  Address : 317 브로드웨이, 로스앤젤레스, CA 90013, 미국
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
