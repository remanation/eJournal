import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Geolocation
} from "react-native";
import { Icon, Header } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { PermissionsAndroid } from "react-native";

export default class Map extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      const color = focused ? tintColor : "#aaa";
      return <Icon color={color} name="map" />;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }

  requestFineLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Maps Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures."
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async componentDidMount() {
    await this.requestFineLocation();

    navigator.geolocation.getCurrentPosition(location => {
      this.setState(
        () => {
          return {
            location
          };
        },
        () => {
          setTimeout(
            () => this.mapRef.fitToSuppliedMarkers(["test"], false),
            100
          );
        }
      );
    });
  }

  onMenuPress = () => this.props.navigation.openDrawer();

  render() {
    const { image, title, description } = this.props;
    console.log("location", this.state.location);
    if (this.state.location)
      console.log(
        this.state.location.coords.latitude,
        this.state.location.coords.longitude
      );

    return (
      <React.Fragment>
        <MapView
          ref={ref => {
            this.mapRef = ref;
          }}
          style={{ flexGrow: 1 }}
        >
          {this.state.location && (
            <Marker
              id="test"
              identifier="test"
              title="test2"
              coordinate={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude
              }}
            />
          )}
        </MapView>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          outerContainerStyles={{
            elevation: 2,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 2,
            shadowColor: "black",
            shadowOpacity: 0.2,
            zIndex: 1,
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            borderWidth: 0.5,
            borderBottomWidth: 0.5,
            borderLeftWidth: 0.5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderTopColor: "rgba(0, 0, 0, 0.3)",
            borderBottomColor: "rgba(0, 0, 0, 0.3)",
            borderLeftColor: "rgba(0, 0, 0, 0.3)",
            borderRightColor: "rgba(0, 0, 0, 0.3)",
            padding: 10,
            marginHorizontal: 10,
            marginTop: 20,
            backgroundColor: "#F7F7F7",
            height: 45
          }}
          innerContainerStyles={{
            alignItems: "center"
          }}
          leftComponent={{
            icon: "menu",
            color: "#2c9cdb",
            underlayColor: "#f7f7f7",
            onPress: this.onMenuPress
          }}
          centerComponent={{ text: "MY TITLE", style: { color: "#2c9cdb" } }}
          rightComponent={{ icon: "home", color: "#2c9cdb" }}
        />
      </React.Fragment>
    );
  }
}
