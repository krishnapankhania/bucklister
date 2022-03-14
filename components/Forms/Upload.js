import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Input = styled("input")({
  display: "none",
});
export default function Upload(props) {
  const [image, setImage] = React.useState(null);
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files.length === 0) {
      return alert("Please select a file.");
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      props.onChange({
        file: files[0],
        filedata: reader.result,
      });
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <>
      <Box
        className="upload-area"
        mt={2}
        py={3}
        display="flex"
        justifyContent="center"
        sx={{
          maxWidth: "100%",
        }}
      >
        {!image && (
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={onChange}
            />
            <Button variant="contained" component="span">
              Image
            </Button>
          </label>
        )}
        {image && <img src={image} width="100%" />}
      </Box>
      {props.error && (
        <Box sx={{ color: "error.main" }}>{props.helperText}</Box>
      )}
    </>
  );
}
