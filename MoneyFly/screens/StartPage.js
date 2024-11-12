import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StartPage = () => {
  return (
    <View style={styles.startPage}>
      <View style={[styles.frame, styles.framePosition]}>
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
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <Text style={[styles.moneyfly, styles.moneyflyTypo]}>MoneyFly</Text>
        <View style={[styles.frameChild, styles.timePosition]} />
        <Text style={[styles.effortlesslySplitExpenses, styles.moneyflyTypo]}>
          Effortlessly split expenses with friends on every adventure. Track who
          owes what, settle up in seconds, and keep your travels stress-free.
          Let’s fly without financial worries!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timePosition: {
    top: "50%",
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
  moneyflyTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "36.96%",
    fontWeight: "600",
    fontFamily: FontFamily.bodyRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  time: {
    right: "64.26%",
    left: "0%",
    width: "35.74%",
    marginTop: -27,
    top: "50%",
    height: 54,
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
    width: "35.74%",
    marginTop: -27,
    top: "50%",
    height: 54,
  },
  statusBar: {
    marginLeft: -215,
    height: 54,
    left: "50%",
    overflow: "hidden",
    width: 430,
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
  frame: {
    width: 430,
    overflow: "hidden",
    left: 0,
    top: 0,
    height: 932,
  },
  moneyfly: {
    fontSize: FontSize.size_31xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 112,
    width: 308,
    fontFamily: FontFamily.interRegular,
    left: 0,
    top: 0,
  },
  frameChild: {
    marginTop: -116.5,
    marginLeft: -98,
    backgroundColor: "#bababa",
    width: 195,
    height: 188,
    left: "50%",
  },
  effortlesslySplitExpenses: {
    top: 418,
    left: 32,
    width: 243,
    height: 157,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.interRegular,
  },
  frame1: {
    top: 201,
    left: 62,
    height: 575,
    width: 308,
  },
  startPage: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default StartPage;
