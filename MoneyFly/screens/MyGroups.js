import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MyGroups = () => {
  return (
    <View style={styles.myGroups}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.borderPosition]}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupLayout]} />
        <Text style={[styles.tripToSpain, styles.tripLayout]}>
          Trip to Spain
        </Text>
        <Text style={[styles.tripToLatvia, styles.tripLayout]}>
          Trip to Latvia
        </Text>
        <Text style={[styles.tripToEstonia, styles.tripLayout]}>
          Trip to Estonia
        </Text>
        <Text style={[styles.katesBday, styles.tripLayout]}>Kate’s bday</Text>
      </View>
      <Text style={styles.groups}>Groups</Text>
      <Text style={styles.edit}>Edit</Text>
      <Image
        style={[styles.myGroupsChild, styles.tripLayout]}
        contentFit="cover"
        source={require("../assets/group-471.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    width: "35.74%",
    marginTop: -27,
    height: 54,
    position: "absolute",
  },
  borderPosition: {
    position: "absolute",
    left: "50%",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  capacityPosition: {
    backgroundColor: Color.labelsPrimary,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    width: 296,
    position: "absolute",
  },
  tripLayout: {
    height: 25,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "36.96%",
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "600",
    fontFamily: FontFamily.bodyRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  time: {
    right: "64.26%",
    left: "0%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    left: "50%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 11.15,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
    left: "50%",
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.15,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -39.85,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "0%",
    left: "64.26%",
  },
  statusBar: {
    marginLeft: -215,
    width: 430,
    overflow: "hidden",
    height: 54,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: 69.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 139,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  homeIndicator: {
    marginLeft: -199,
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 393,
    height: 21,
    left: "50%",
  },
  groupChild: {
    top: 110,
    left: 0,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    top: 220,
    left: 0,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
  },
  groupInner: {
    marginLeft: -148,
    top: 330,
    left: "50%",
  },
  rectangleView: {
    left: 0,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  tripToSpain: {
    marginTop: -178,
    width: 140,
    color: Color.white,
    fontSize: FontSize.size_xl,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
    top: "50%",
    left: "50%",
    marginLeft: -70,
  },
  tripToLatvia: {
    marginTop: -68,
    width: 140,
    color: Color.white,
    fontSize: FontSize.size_xl,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
    top: "50%",
    left: "50%",
    marginLeft: -70,
  },
  tripToEstonia: {
    marginTop: 42,
    marginLeft: -69,
    width: 140,
    color: Color.white,
    fontSize: FontSize.size_xl,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
    top: "50%",
    left: "50%",
  },
  katesBday: {
    marginTop: 152,
    width: 140,
    color: Color.white,
    fontSize: FontSize.size_xl,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
    top: "50%",
    left: "50%",
    marginLeft: -70,
  },
  rectangleParent: {
    top: 304,
    left: 67,
    height: 390,
    width: 296,
    position: "absolute",
  },
  groups: {
    marginLeft: -155,
    top: 140,
    fontSize: FontSize.size_31xl,
    width: 308,
    height: 112,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  edit: {
    top: 94,
    left: 369,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  myGroupsChild: {
    top: 96,
    left: 20,
    width: 49,
  },
  myGroups: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default MyGroups;
