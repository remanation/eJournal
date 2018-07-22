import React, { Component } from "react";
import { Header as ElementsHeader } from "react-native-elements";
import { Platform } from "react-native";

export class Header extends Component {
  render() {
    return (
      <ElementsHeader
        statusBarProps={{ barStyle: "light-content" }}
        outerContainerStyles={{
          elevation: 2,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 2,
          shadowColor: "black",
          shadowOpacity: 0.2,
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          borderBottomWidth: 0.1, //Border will not be displayed correct is setting borderWidth directly
          borderLeftWidth: 0.1, //Border will not be displayed correct is setting borderWidth directly
          borderBottomColor: "rgba(0, 0, 0, 0.3)",
          borderLeftColor: "rgba(0, 0, 0, 0.3)",
          padding: 10,
          marginHorizontal: 10,
          marginTop: Platform.OS === "ios" ? 20 : 10,
          backgroundColor: "#f7f7f7",
          height: 45
        }}
        innerContainerStyles={{
          alignItems: "center"
        }}
        leftComponent={{
          icon: "menu",
          color: "#2c9cdb",
          underlayColor: "#f7f7f7",
          onPress: this.props.onMenuPress
        }}
        centerComponent={{ text: "MY TITLE", style: { color: "#2c9cdb" } }}
      />
    );
  }
}
