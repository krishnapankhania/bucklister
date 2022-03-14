import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import language from "../../strings/language";
import { AppBar } from "@mui/material";
import WannaDo from "./WannaDo";
import AddNewItem from "./AddNewItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: {
              sm: 2,
              md: 3,
            },
          }}
        >
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyBucketList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          mt={{
            xs: 2,
            md: 0,
          }}
        >
          <AppBar position="static" color="secondary">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="primary"
              textColor="inherit"
              centered
              variant="fullWidth"
            >
              <Tab label={language.mblTab1} {...a11yProps(0)} />
              <Tab label={language.mblTab2} {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          <WannaDo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <AddNewItem/>
      </Box>
    </>
  );
}
