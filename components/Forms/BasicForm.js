import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
export default function BasicForm({ children, onSubmit }) {
  const { handleSubmit, control } = useForm();
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  if (!children.length) {
    children = [children];
  }
  children.map((child, i) => {
    // now have access to props.source in parent
    console.log(child.props);
  });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { control });
    }
    return child;
  });
  return (
    <Box
      component="form"
      autoComplete="false"
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      {childrenWithProps}
    </Box>
  );
}
