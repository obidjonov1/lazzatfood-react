import { Container } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

export function NavbarOthersBanner(props: any) {
  return (
    <div style={{ position: "relative" }}>
      <div className="banner_section">
        <img
          className="banner_section_img banner_anim"
          src="/images/backgraund3.png"
          alt=""
        />
        <img
          className="banner_section_img"
          src="/images/background2.png"
          alt=""
        />
        <Container sx={{ position: "relative" }}>
          <div className="banner-content">
            <h1>Partnership page</h1>
            <ul className="pages">
              <li onClick={props.setPath}>
                <NavLink
                  to={"/"}
                  className="pages-first"
                  activeClassName="underline"
                >
                  <AiFillHome className="home-icon" />
                  Home
                </NavLink>
              </li>
              <MdOutlineKeyboardArrowRight className="page_arrow" />
              <li>
                <p className="which_page">Partnership page</p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}
