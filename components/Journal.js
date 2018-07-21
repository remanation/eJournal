import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Timeline from "./Timeline";
import Map from "./Map";
import {
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

const tabNavigator = createBottomTabNavigator(
  {
    timeline: { screen: Timeline },
    map: { screen: Map }
  },
  {
    initialRouteName: "timeline",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#2c9cdb",
      style: {
        elevation: 4,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowColor: "black",
        shadowOpacity: 0.2,
        borderTopWidth: 0.5,
        borderTopColor: "rgba(0, 0, 0, 0.3)"
      }
    }
  }
);

export default createDrawerNavigator({
  journal: {
    screen: tabNavigator
  }
});
