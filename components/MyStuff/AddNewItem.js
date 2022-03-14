import * as React from "react";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../context/global";
import language from "../../strings/language";
import { OutlinedInput, TextField, Select, MenuItem } from "@mui/material";
import RichEditor from "../Common/RichEditor";
import BaseDialog from "../Common/BaseDialog";
import BasicForm from "../Forms/BasicForm";
import BasicFormField from "../Forms/BasicFormField";
import Upload from "../Forms/Upload";
import errors from "../../strings/errors";
import useCategories from "../../hooks/useCategories";

export default function AddNewItem() {
  const { globalState, dispatchGlobal } = React.useContext(GlobalContext);
  const { categories } = useCategories();

  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <BaseDialog id="add-new-item" title={language.newItem}>
      <BasicForm onSubmit={handleSubmit}>
        <BasicFormField id="title" rules={{ required: errors.titleError }}>
          {({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Title"
              name="title"
              value={value}
              error={!!error}
              helperText={error ? error.message : null}
              onChange={onChange}
              autoComplete="title"
              autoFocus
            />
          )}
        </BasicFormField>
        <BasicFormField id="description" rules={{ required: errors.descError }}>
          {({ field: { onChange, value }, fieldState: { error } }) => (
            <RichEditor
              onChange={onChange}
              value={value}
              required
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        </BasicFormField>
        <BasicFormField id="category">
          {({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              label={"Category"}
              // value={value}
              input={<OutlinedInput label={"Category"} />}
              sx={{ mt: 2, color: "black" }}
              onChange={onChange}
            >
              {categories?.map((category) => (
                <MenuItem value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>
          )}
        </BasicFormField>

        <BasicFormField id="image">
          {({ field: { onChange, value }, fieldState: { error } }) => (
            <Upload
              onChange={onChange}
              value={value}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        </BasicFormField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {language.add}
        </Button>
      </BasicForm>
    </BaseDialog>
  );
}
