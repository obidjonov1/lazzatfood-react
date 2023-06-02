import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export const TViewer = (props: any) => {
  const editorRef = useRef();

  return (
    <Stack
      sx={{
        background: "white",
        mt: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box sx={{ m: "40px" }}>
        <Viewer
          // @ts-ignore
          ref={editorRef}
          initialValue={props.chosenSingleBoArticle?.art_content}
          // initialValue={props.text}
          height={"600px"}
        />
      </Box>
    </Stack>
  );
};
