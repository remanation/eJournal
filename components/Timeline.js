import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  SectionList
} from "react-native";
import { Icon, Divider, Badge, Header } from "react-native-elements";
import ActionButton from "react-native-action-button";
import FeatherIcon from "react-native-vector-icons/FontAwesome";

const sections = [
  {
    title: "25 september 2018",
    data: [
      {
        date: "25 September 2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25 September 2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      }
    ]
  },
  {
    title: "11 november 2018",
    data: [
      {
        date: "25.09.2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "16:15",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      },
      {
        date: "25.09.2018",
        time: "17:00",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        image: "",
        location: "",
        weather: ""
      }
    ]
  }
];

export default class Timeline extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      const color = focused ? tintColor : "#aaa";
      return <Icon color={color} name="timeline" />;
    }
  };

  renderItem = ({
    item: { time, title, description, image, location, weather },
    index,
    section
  }) => {
    console.log(index, section);
    const shouldRenderLine = index != section.data.length - 1;

    const itemLineStyle = index === 0 ? { marginTop: 4 } : {};

    return (
      <View style={styles.itemContainer}>
        <View style={{}}>
          <Badge
            containerStyle={{
              backgroundColor: "#fd9797",
              zIndex: 10,
              width: 45,
              padding: 5
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>{time}</Text>
          </Badge>
        </View>
        <View style={styles.itemLineContainer}>
          <View style={styles.itemCircle} />
          {shouldRenderLine ? (
            <View style={[itemLineStyle, styles.itemLine]} />
          ) : (
            <View
              style={{ height: 20, width: 2, backgroundColor: "#2c9cdb" }}
            />
          )}
        </View>
        <View style={styles.itemDetailContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemDescription}>{description}</Text>
        </View>
        <Divider />
      </View>
    );
  };

  renderSectionHeader = ({ section: { title } }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 12, opacity: 0.6 }}>
          {title}
        </Text>
      </View>
    );
  };

  onMenuPress = () => this.props.navigation.openDrawer();

  render() {
    return (
      <React.Fragment>
        <SectionList
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.list}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={sections}
          keyExtractor={(item, index) => item + index}
        />
        <ActionButton buttonColor="#2c9cdb" fixNativeFeedbackRadius={true}>
          <ActionButton.Item
            buttonColor="#2c9cdb"
            size={40}
            title="Add image"
            nativeFeedbackRippleColor="rgba(255,255,255,0)"
            onPress={() => {}}
          >
            <Icon
              name="image"
              type="feather"
              size={20}
              color="white"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            nativeFeedbackRippleColor="rgba(255,255,255,0)"
            buttonColor="#2c9cdb"
            size={40}
            title="Add location"
            onPress={() => {}}
          >
            <Icon
              name="map-pin"
              type="feather"
              size={20}
              color="white"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            nativeFeedbackRippleColor="rgba(255,255,255,0)"
            buttonColor="#2c9cdb"
            size={40}
            title="Add activity"
            onPress={() => {}}
          >
            <Icon
              name="activity"
              type="feather"
              size={20}
              color="white"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            nativeFeedbackRippleColor="rgba(255,255,255,0)"
            buttonColor="#2c9cdb"
            size={40}
            title="Add Task"
            onPress={() => console.log("notes tapped!")}
          >
            <Icon
              name="create"
              color="white"
              size={20}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
        </ActionButton>
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
            onPress: this.onMenuPress
          }}
          centerComponent={{ text: "MY TITLE", style: { color: "#2c9cdb" } }}
          rightComponent={{ icon: "home", color: "#2c9cdb" }}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center"
  },
  itemContainer: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  itemDetailContainer: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    marginBottom: 10,
    paddingRight: 10
  },
  itemLineContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 30
  },
  itemCircle: {
    position: "absolute",
    top: 4,
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: "#2c9cdb"
  },
  itemLine: {
    flex: 1,
    width: 2,
    backgroundColor: "#2c9cdb"
  },
  itemTitle: {
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 12,
    fontWeight: "bold"
  },
  itemDescription: {
    fontSize: 12,
    opacity: 0.6
  },
  list: {
    paddingTop: 70,
    flexGrow: 1
  },
  actionButtonIcon: {
    fontSize: 50,
    height: 22,
    color: "white"
  }
});
