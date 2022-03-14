import React from "react";
import dynamic from "next/dynamic";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { stateToHTML } from "draft-js-export-html";

const MUIRichTextEditor = dynamic(() => import("mui-rte"), {
  ssr: false,
});

const myTheme = createTheme({
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: "100%",
        height: "300px",
        borderWidth: "1px",
        border: "1px solid #999",
        padding: "5px 15px",
        boxSizing: "border-box",
      },
      editor: {
        // borderBottom: "1px solid gray",
      },
    },
  },
});

export default function RichEditor(props) {
  return (
    <ThemeProvider theme={myTheme}>
      <MUIRichTextEditor
        label="Start typing..."
        controls={["title", "bold", "italic", "underline"]}
        onChange={(state) => {
          props.onChange(stateToHTML(state.getCurrentContent()));
        }}
        required={props.required}
        error={props.error}
        // defaultValue={props.value}
      />
      {props.error && (
        <Box sx={{ color: "error.main" }}>{props.helperText}</Box>
      )}
    </ThemeProvider>
  );
}
