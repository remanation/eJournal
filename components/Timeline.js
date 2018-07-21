import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  Animated
} from "react-native";
import { Icon, Divider, Badge } from "react-native-elements";
import ActionButton from "react-native-action-button";
import FeatherIcon from "react-native-vector-icons/FontAwesome";
import { Header } from "./Header";

const NAVBAR_HEIGHT = 70;

const AnimatedList = Animated.createAnimatedComponent(SectionList);

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

const actionMenu = [
  {
    id: "image",
    title: "Add image",
    icon: "image",
    iconType: "feather"
  },
  {
    id: "location",
    title: "Add location",
    icon: "map-pin",
    iconType: "feather"
  },
  {
    id: "activity",
    title: "Add activity",
    icon: "activity",
    iconType: "feather"
  },
  {
    id: "task",
    title: "Add task",
    icon: "create"
  }
];

export default class Timeline extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      const color = focused ? tintColor : "#aaa";
      return <Icon color={color} name="timeline" />;
    }
  };

  constructor(props) {
    super(props);

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: "clamp"
          }),
          offsetAnim
        ),
        0,
        NAVBAR_HEIGHT
      )
    };
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue =
      this._scrollValue > NAVBAR_HEIGHT &&
      this._clampedScrollValue > NAVBAR_HEIGHT / 2
        ? this._offsetValue + NAVBAR_HEIGHT
        : this._offsetValue - NAVBAR_HEIGHT;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true
    }).start();
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
    const { clampedScroll } = this.state;

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT],
      outputRange: [0, -NAVBAR_HEIGHT],
      extrapolate: "clamp"
    });
    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });

    return (
      <React.Fragment>
        <AnimatedList
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.list}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={sections}
          keyExtractor={(item, index) => item + index}
          scrollEventThrottle={1}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true }
          )}
        />
        <ActionButton buttonColor="#2c9cdb" fixNativeFeedbackRadius={false}>
          {actionMenu.map(({ id, title, icon, iconType }) => {
            return (
              <ActionButton.Item
                key={id}
                buttonColor="#2c9cdb"
                size={40}
                title={title}
                nativeFeedbackRippleColor="rgba(255,255,255,0)"
                onPress={() => {}}
              >
                <Icon
                  name={icon}
                  type={iconType}
                  size={20}
                  color="white"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
            );
          })}
        </ActionButton>
        <Animated.View
          style={[
            styles.navbar,
            { transform: [{ translateY: navbarTranslate }] }
          ]}
        >
          <Header onMenuPress={this.onMenuPress} />
        </Animated.View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    height: NAVBAR_HEIGHT,
    justifyContent: "center"
  },

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
