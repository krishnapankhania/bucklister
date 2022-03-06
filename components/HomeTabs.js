import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { Box, Container, AppBar, Tabs, Tab, Typography } from "@mui/material";
import language from "../strings/language";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import AboutUs from "./About/About";
import MyStuff from "./MyStuff/MyStuff";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ width: "inherit" }}
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomeTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        // variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label={language.tab1} {...a11yProps(0)} />
        <Tab label={language.tab2} {...a11yProps(1)} />
        <Tab label={language.tab3} {...a11yProps(2)} />
        <Tab label={language.tab4} {...a11yProps(3)} />
      </Tabs>
      <Container maxWidth="lg">
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Explore />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <AboutUs />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <MyStuff />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </>
  );
}
