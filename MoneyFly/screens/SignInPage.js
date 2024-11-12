import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SignInPage = () => {
  return (
    <View style={styles.signinPage}>
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
      <Text style={[styles.oneStepCloser, styles.signUpTypo]}>
        One step closer to clear, hassle-free spending with friends.
      </Text>
      <View style={[styles.haveAnAccountParent, styles.borderPosition]}>
        <Text style={[styles.haveAnAccount, styles.logInTypo]}>
          Have an account?
        </Text>
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupItem, styles.groupChildLayout]} />
        </View>
      </View>
      <View style={[styles.signinPageChild, styles.groupChildLayout]} />
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
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
  signUpTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    width: 296,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 60,
    width: 296,
    left: "50%",
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
    bottom: 0,
  },
  moneyfly: {
    marginLeft: -156,
    top: 100,
    fontSize: FontSize.size_31xl,
    width: 308,
    height: 112,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    left: "50%",
    position: "absolute",
  },
  oneStepCloser: {
    marginLeft: -158,
    top: 230,
    width: 315,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  haveAnAccount: {
    marginLeft: -98,
    bottom: 0,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.interRegular,
  },
  logIn: {
    marginLeft: 48,
    bottom: 0,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.interRegular,
  },
  haveAnAccountParent: {
    marginLeft: -100,
    bottom: 61,
    width: 196,
    height: 22,
  },
  groupChild: {
    backgroundColor: Color.colorDarkgray,
    borderRadius: Border.br_3xs,
    height: 60,
    marginLeft: -148,
    top: 0,
  },
  groupItem: {
    top: 81,
    backgroundColor: Color.colorDarkgray,
    borderRadius: Border.br_3xs,
    height: 60,
    marginLeft: -148,
  },
  rectangleGroup: {
    top: 162,
    height: 141,
  },
  rectangleParent: {
    top: 331,
    height: 303,
  },
  signinPageChild: {
    marginLeft: -150,
    top: 667,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
  },
  signUp: {
    marginLeft: -40,
    top: 686,
  },
  signinPage: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default SignInPage;
