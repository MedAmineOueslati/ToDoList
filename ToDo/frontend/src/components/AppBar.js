import React from "react";
import { View } from "react-native";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Appbar = () => (
  <View >
  <AppBar
    title="To Do"
    leading={(props) => (
      <IconButton
        icon={(props) => <Icon name="menu" {...props} />}
        {...props}
      />
    )}
    trailing={(props) => (
      <HStack>
        <IconButton
          icon={(props) => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={(props) => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
  </View>
);

export default Appbar;
