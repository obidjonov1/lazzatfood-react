import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

export function NavbarOthersBanner(props: any) {
  return (
    <div className="banner-container">
      <div className="banner-content">
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
            <p>Help Page</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
