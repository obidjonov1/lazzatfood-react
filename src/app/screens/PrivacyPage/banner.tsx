import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

export function NavbarOthersBanner(props: any) {
  return (
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
    </div>
  );
}
