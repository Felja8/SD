import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FindMemberInApp = () => {
  return (
    <View style={styles.findMemberInApp}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.findPosition1]}>
            <View style={[styles.border, styles.findPosition1]} />
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
      <View style={[styles.homeIndicator, styles.findPosition1]}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <Text style={[styles.findMemberIn, styles.enterNameTypo]}>
        Find Member in the App
      </Text>
      <View style={[styles.findMemberInAppChild, styles.findPosition1]} />
      <View style={[styles.findMemberInAppItem, styles.findPosition]} />
      <Text style={[styles.searchGlyph, styles.enterNamePosition]}>􀊫</Text>
      <Text style={[styles.enterName, styles.enterNamePosition]}>
        Enter name
      </Text>
      <View style={[styles.findMemberInAppInner, styles.findPosition]} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-47.png")}
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
  findPosition1: {
    left: "50%",
    position: "absolute",
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
  enterNameTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  findPosition: {
    height: 20,
    width: 20,
    backgroundColor: Color.colorGainsboro,
    marginTop: -65,
    top: "50%",
    position: "absolute",
  },
  enterNamePosition: {
    top: 400,
    lineHeight: 22,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "36.96%",
    fontWeight: "600",
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    fontFamily: FontFamily.bodyRegular,
    fontSize: FontSize.bodyRegular_size,
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
    opacity: 0.35,
    width: 25,
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
    top: 0,
    width: 430,
    overflow: "hidden",
    height: 54,
    left: "50%",
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
  },
  findMemberIn: {
    marginLeft: -155,
    top: 140,
    fontSize: FontSize.size_31xl,
    lineHeight: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 325,
    height: 112,
    left: "50%",
    position: "absolute",
  },
  findMemberInAppChild: {
    marginLeft: -150,
    top: 374,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    width: 300,
    height: 74,
  },
  findMemberInAppItem: {
    left: 78,
  },
  searchGlyph: {
    color: Color.labelsSecondary,
    textAlign: "left",
    left: 78,
    width: 25,
    fontFamily: FontFamily.bodyRegular,
    fontSize: FontSize.bodyRegular_size,
    top: 400,
  },
  enterName: {
    left: 125,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  findMemberInAppInner: {
    right: 83,
  },
  groupIcon: {
    top: 96,
    left: 20,
    width: 49,
    height: 25,
    position: "absolute",
  },
  findMemberInApp: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default FindMemberInApp;
