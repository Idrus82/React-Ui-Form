import React from "react";
// App components
import AppFormControl from "./components/AppFormControl";
import AppButton from "./components/AppButton";
import AppTextField from "./components/AppTextField";
import AppSelect from "./components/AppSelect";

// material ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./style.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Noto Sans JP",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

export default function App() {
  const [appSelectValue, setAppSelectValue] = React.useState("");
  const onAppSelectChange = (event) => {
    return setAppSelectValue(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppFormControl
        horizontal
        labelWidth={"60px"}
        label="Label"
        helperText="終了日時は開始日時より後の日時を選択してください"
      >
        <AppTextField placeholder="placeholder" />
      </AppFormControl>
      <AppFormControl
        horizontal
        labelWidth={"60px"}
        label="Label"
        helperText="終了日時は開始日時より後の日時を選択してください"
      >
        <AppTextField
          placeholder="placeholder"
          startAdornment={
            <InputAdornment position="start">
              <AccessTimeIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <AccessTimeIcon />
            </InputAdornment>
          }
        />
      </AppFormControl>
      <AppFormControl
        // horizontal
        labelWidth={"60px"}
        label="Label"
        helperText="Mantap"
      >
        <AppSelect
          value={appSelectValue}
          onChange={onAppSelectChange}
          startAdornment={
            <InputAdornment position="start">
              <AccessTimeIcon />
            </InputAdornment>
          }
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </AppSelect>
      </AppFormControl>
      <AppFormControl
        label="Label"
        helperText="終了日時は開始日時より後の日時を選択してください"
      >
        <AppButton>Hello StackBlitz!</AppButton>
      </AppFormControl>
      <AppButton variant="contained" color="primary">
        Hello StackBlitz!
      </AppButton>
    </ThemeProvider>
  );
}
