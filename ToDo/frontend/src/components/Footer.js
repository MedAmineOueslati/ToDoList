import React from "react";
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Footer = () => (
  <AppBar
    variant="bottom"
    leading={(props) => (
      <IconButton
        icon={(props) => <Icon name="menu" {...props} />}
        {...props}
      />
    )}
    trailing={(props) => (
      <IconButton
        icon={(props) => <Icon name="magnify" {...props} />}
        {...props}
      />
    )}
    style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
  ></AppBar>
);

export default Footer;
