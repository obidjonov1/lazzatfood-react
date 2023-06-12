import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import useDeviceDetect from "../../../lib/responsiveDetector";
import { NavLink } from "react-router-dom";
import { NavbarHomeBanner } from "./banner";

export function Responsive(props: any) {
  const { isMobile } = useDeviceDetect();

  if (isMobile()) {
    return (
      <div>
        <NavbarHomeBanner />
        <div className="under-construction">
          <p className="construction">Mobil version is developing! 👨‍💻</p>
          <p className="construction">Please use our desktop version 😊</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
