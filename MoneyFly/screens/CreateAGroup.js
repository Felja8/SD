import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CreateAGroup = () => {
  return (
    <View style={styles.createAGroup}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <Text style={[styles.createGroup, styles.enterNameTypo]}>
        Create Group
      </Text>
      <View style={styles.createAGroupChild} />
      <View style={[styles.createAGroupItem, styles.createGroupPosition]} />
      <Image
        style={[styles.createAGroupInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-48.png")}
      />
      <Text style={[styles.enterName, styles.enterNameTypo]}>Enter name</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.createAGroupChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.findMemberIn, styles.memberTypo]}>
        Find Member in MoneyFly
      </Text>
      <Text style={[styles.addMemberManually, styles.memberTypo]}>
        Add Member Manually
      </Text>
      <View style={[styles.createAGroupChild2, styles.createGroupPosition]} />
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
  iconLayout: {
    maxHeight: "100%",
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
    lineHeight: 22,
    position: "absolute",
  },
  createGroupPosition: {
    height: 20,
    backgroundColor: Color.colorGainsboro,
    marginTop: -65,
    top: "50%",
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 60,
    width: 296,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_xl,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  memberTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
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
    position: "absolute",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    left: "50%",
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
    position: "absolute",
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.15,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
    left: "50%",
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -39.85,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
    left: "50%",
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
    left: "50%",
    position: "absolute",
  },
  createGroup: {
    marginLeft: -155,
    top: 140,
    fontSize: FontSize.size_31xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 325,
    height: 112,
    left: "50%",
  },
  createAGroupChild: {
    marginLeft: -150,
    top: 374,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    width: 300,
    height: 74,
    left: "50%",
    position: "absolute",
  },
  createAGroupItem: {
    right: 329,
    width: 23,
  },
  createAGroupInner: {
    height: "2.15%",
    width: "5.35%",
    top: "43.03%",
    right: "76.51%",
    bottom: "54.83%",
    left: "18.14%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  enterName: {
    top: 400,
    left: 125,
    fontSize: FontSize.size_base,
  },
  rectangleView: {
    top: 496,
  },
  createAGroupChild1: {
    top: 586,
  },
  findMemberIn: {
    top: 516,
    left: 93,
  },
  addMemberManually: {
    top: 605,
    left: 109,
  },
  createAGroupChild2: {
    right: 83,
    width: 20,
  },
  groupIcon: {
    top: 96,
    left: 20,
    width: 49,
    height: 25,
    position: "absolute",
  },
  createAGroup: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default CreateAGroup;
