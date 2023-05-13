import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function MySettings(props: any) {
  return (
    <Stack className={"my_settings_page"}>
      <Box className={"member_media_frame"}>
        <img src={"/images/default_user.svg"} className={"mb_image"} alt="" />
        <div className={"media_change_box"}>
          <span>Upload image</span>
          <p>You can upload these types JPG, JPEG, PNG !</p>
          <div className={"up_del_box"}>
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Nick name(ID)</label>
          <input
            className={"spec_input mb_nick"}
            type="text"
            placeholder="John Dani"
            name="mb_nick"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Phone number</label>
          <input
            className={"spec_input mb_phone"}
            type="text"
            placeholder={"99890 1234567"}
            name="mb_phone"
          />
        </div>
        <div className={"short_input"}>
          <label className={"spec_label"}>Address</label>
          <input
            className={"spec_input  mb_address"}
            type="text"
            placeholder={"Andijan, Asaka 4-1"}
            name="mb_address"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Info</label>
          <textarea
            className={"spec_textarea mb_description"}
            name="mb_description"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant={"contained"}>Save</Button>
      </Box>
    </Stack>
  );
}
