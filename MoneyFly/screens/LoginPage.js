import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderBorder]} />
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
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <Text style={[styles.moneyfly, styles.logInTypo]}>MoneyFly</Text>
      <View style={styles.dontHaveAnAccountParent}>
        <Text style={[styles.dontHaveAn, styles.logInTypo]}>
          Don't have an account?
        </Text>
        <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.groupItem, styles.groupChildPosition]} />
      </View>
      <View style={[styles.loginPageChild, styles.groupChildPosition]} />
      <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      <Text style={[styles.forgotPassword, styles.logInTypo]}>
        Forgot Password?
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeLayout]}>
        Remember me
      </Text>
      <View style={[styles.loginPageItem, styles.rememberMeLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    width: "35.74%",
    marginTop: -27,
    top: "50%",
    height: 54,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
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
  logInTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  groupChildPosition: {
    height: 60,
    width: 296,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  rememberMeLayout: {
    height: 20,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "36.96%",
    fontWeight: "600",
    fontFamily: FontFamily.bodyRegular,
    textAlign: "center",
    lineHeight: 22,
    color: Color.labelsPrimary,
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  time: {
    right: "64.26%",
    left: "0%",
    top: "50%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.labelsPrimary,
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
    top: "50%",
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
    position: "absolute",
  },
  moneyfly: {
    marginLeft: -153,
    top: 201,
    fontSize: FontSize.size_31xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 308,
    height: 112,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interRegular,
    left: "50%",
  },
  dontHaveAn: {
    left: 0,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyRegular_size,
    top: 0,
  },
  signUp: {
    left: 188,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyRegular_size,
    top: 0,
  },
  dontHaveAnAccountParent: {
    top: 851,
    width: 251,
    height: 22,
    left: 100,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorDarkgray,
    borderRadius: Border.br_3xs,
    height: 60,
    top: 0,
  },
  groupItem: {
    top: 81,
    backgroundColor: Color.colorDarkgray,
    borderRadius: Border.br_3xs,
    height: 60,
  },
  rectangleParent: {
    top: 366,
    height: 141,
    width: 296,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  loginPageChild: {
    top: 572,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
  },
  logIn: {
    marginTop: 125,
    marginLeft: -29,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_300,
    top: "50%",
    left: "50%",
  },
  forgotPassword: {
    marginLeft: -71,
    top: 653,
    color: Color.labelsPrimary,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.bodyRegular_size,
    left: "50%",
  },
  rememberMe: {
    top: 530,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDimgray,
    textAlign: "left",
    width: 113,
    left: 100,
  },
  loginPageItem: {
    top: 526,
    left: 73,
    borderColor: Color.colorGray_200,
    width: 20,
    borderWidth: 1,
    borderStyle: "solid",
  },
  loginPage: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default LoginPage;
