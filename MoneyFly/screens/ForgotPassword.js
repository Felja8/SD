import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <View style={styles.forgotPasswordChild} />
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
      <Text style={[styles.moneyfly, styles.moneyflyFlexBox]}>MoneyFly</Text>
      <Text style={[styles.enterYourEmail, styles.enterYourEmailTypo]}>
        Enter your email, phone, or username and we'll send you a link to change
        a new password
      </Text>
      <View style={[styles.rectangleParent, styles.borderPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.forgotPassword1, styles.enterYourEmailTypo]}>
          Forgot Password
        </Text>
      </View>
      <Image
        style={[styles.forgotPasswordItem, styles.borderPosition]}
        contentFit="cover"
        source={require("../assets/frame-4.png")}
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
  moneyflyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  enterYourEmailTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 296,
    left: "50%",
    position: "absolute",
  },
  forgotPasswordChild: {
    left: 0,
    backgroundColor: Color.colorWhitesmoke,
    width: 430,
    position: "absolute",
    top: 0,
    height: 932,
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
    overflow: "hidden",
    height: 54,
    left: "50%",
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
  },
  moneyfly: {
    marginLeft: -156,
    fontSize: FontSize.size_31xl,
    width: 308,
    height: 112,
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: 100,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  enterYourEmail: {
    top: 390,
    left: 49,
    width: 328,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  groupChild: {
    marginLeft: -149,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    width: 296,
    top: 0,
  },
  groupItem: {
    marginLeft: -147,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    top: 100,
    width: 296,
  },
  forgotPassword1: {
    top: 119,
    left: 69,
  },
  rectangleParent: {
    marginLeft: -150,
    top: 486,
    width: 298,
    height: 160,
  },
  forgotPasswordItem: {
    marginLeft: -57,
    top: 225,
    width: 105,
    height: 115,
  },
  forgotPassword: {
    backgroundColor: "#fffefe",
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default ForgotPassword;
