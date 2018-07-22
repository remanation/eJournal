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
import { Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { PermissionsAndroid } from "react-native";
import { Header } from "./Header";

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
            200
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
        <Header onMenuPress={this.onMenuPress} />
      </React.Fragment>
    );
  }
}
