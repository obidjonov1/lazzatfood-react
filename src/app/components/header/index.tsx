import { Badge, Button, IconButton } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  Instagram,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import { CssVarsProvider } from "@mui/joy/styles";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export function NavbarHome(props: any) {
  return (
    <Container>
      <Stack className="format header-top" flexDirection={"row"}>
        <Box className="header-social-container">
          <FacebookOutlined />
          <YouTube />
          <Instagram />
          <Telegram />
        </Box>
        <Box className="header-alert-news">
          <p>
            <b>Bepul yetkazib berish</b>
            50.000₩ dan boshlab
          </p>
        </Box>
        <Box className="header-top-actions">
          <CssVarsProvider>
            <Select defaultValue="uz">
              <Option value="uz">Uzbek</Option>
              <Option value="ru">Russia</Option>
              <Option value="kr">Korean</Option>
              <Option value="en-US">English</Option>
            </Select>
          </CssVarsProvider>
        </Box>
      </Stack>
    </Container>
  );
}
