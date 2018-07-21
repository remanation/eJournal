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
      activeTintColor: "#2c9cdb"
    }
  }
);

export default createDrawerNavigator({
  journal: {
    screen: tabNavigator
  }
});
