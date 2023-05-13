import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const TuiEditor = (props: any) => {
  const editorRef = useRef(null);

  return (
    <Stack>
      <Stack
        direction={"row"}
        style={{ margin: "40px" }}
        justifyContent={"space-evenly"}
      >
        <Box className={"form_row"} style={{ width: "300px" }}>
          <Typography style={{ color: "#303030", margin: "10px" }} variant="h3">
            Category
          </Typography>
          <FormControl sx={{ width: "100%", background: "white" }}>
            <Select
              value={"story"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={""}>
                <span>Select category</span>
              </MenuItem>
              <MenuItem value={"market"}>Review market</MenuItem>
              <MenuItem value={"product"}>Review product</MenuItem>
              <MenuItem value={"story"}>My story</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={"form_row"} style={{ width: "300px" }}>
          <Typography style={{ color: "#303030", margin: "10px" }} variant="h3">
            Theme
          </Typography>
          <TextField
            id="filled-basic"
            label="Theme"
            style={{ width: "300px", background: "white" }}
          />
        </Box>
      </Stack>

      <Editor
        //  @ts-ignore
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        initialEditType="wysiwyg"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{
          load: function (param: any) {},
        }}
      />
      <Stack flexDirection={"row"} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "250px", height: "45px" }}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
