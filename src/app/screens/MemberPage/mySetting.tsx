import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { verifiedMemberData } from "../../apiServices/verify";
import assert from "assert";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { MemberUpdateData } from "../types/user";

export function MySettings(props: any) {
  /** INITIALIZATIONS */
  const [file, setFile] = useState(verifiedMemberData?.mb_image);

  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_phone: "",
    mb_address: "",
    mb_description: "",
    mb_image: "",
  });

  /** HANDLERS */
  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberAddressHandler = (e: any) => {
    memberUpdate.mb_address = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const handleImagePreviewer = (e: any) => {
    try {
      console.log(e.target.files);
      const file = e.target.files[0];

      const fileType = file["type"],
        validTypes = ["image/jpg", "image/jpeg", "image/png"];
      assert.ok(validTypes.includes(fileType) && file, Definer.input_err2);

      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file)); // link olib rerender bo'ladi
    } catch (err) {
      console.log(`ERROR ::: handleImagePreviewer ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const handleSubmitButton = async () => {
    try {
      const memberService = new MemberApiService();
      const result = await memberService.updateMemberData(memberUpdate);

      assert.ok(result, Definer.general_err1);
      await sweetTopSmallSuccessAlert(
        "Information modified successfully!",
        700,
        false
      );
      window.location.reload();
    } catch (err) {
      console.log(`ERROR ::: handleSubmitButton ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack className={"my_settings_page"}>
      <Box className={"member_media_frame"}>
        <img src={file} className={"mb_image"} alt="" />
        <div className={"media_change_box"}>
          <span>Upload image</span>
          <p>You can upload these types JPG, JPEG, PNG !</p>
          <div className={"up_del_box"}>
            <Button
              component="label"
              style={{ minWidth: "0" }}
              onChange={handleImagePreviewer}
            >
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
            placeholder={verifiedMemberData?.mb_nick}
            name="mb_nick"
            onChange={changeMemberNickHandler}
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Phone number</label>
          <input
            className={"spec_input mb_phone"}
            type="text"
            placeholder={verifiedMemberData?.mb_phone}
            name="mb_phone"
            onChange={changeMemberPhoneHandler}
          />
        </div>
        <div className={"short_input"}>
          <label className={"spec_label"}>Address</label>
          <input
            className={"spec_input  mb_address"}
            type="text"
            placeholder={verifiedMemberData?.mb_address ?? "No address entered"}
            name="mb_address"
            onChange={changeMemberAddressHandler}
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Info</label>
          <textarea
            placeholder={verifiedMemberData?.mb_description ?? "Not available"}
            className={"spec_textarea mb_description"}
            name="mb_description"
            onChange={changeMemberDescriptionHandler}
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant={"contained"} onClick={handleSubmitButton}>
          Save
        </Button>
      </Box>
    </Stack>
  );
}
