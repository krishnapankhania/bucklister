import React from "react";
import { Controller } from "react-hook-form";

export default function BasicFormField({ id, children, control , rules }) {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue=""
      render={(props) => children(props)}
      rules={rules}
    />
  );
}
