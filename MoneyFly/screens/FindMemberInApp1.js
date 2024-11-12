import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FindMemberInApp1 = () => {
  return (
    <View style={styles.findMemberInApp}>
      <View style={styles.statusBar}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={styles.battery}>
            <View style={styles.border} />
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
      <Text style={[styles.findMemberIn, styles.annaTypo1]}>
        Find Member in the App
      </Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.searchGlyph, styles.annaPosition]}>􀊫</Text>
        <Text style={[styles.anna, styles.annaPosition]}>Anna</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
      </View>
      <Image
        style={styles.findMemberInAppChild}
        contentFit="cover"
        source={require("../assets/group-47.png")}
      />
      <View style={[styles.rectangleGroup, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={[styles.frameChild1, styles.frameChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.annaS, styles.annaTypo]}>Anna S.</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={[styles.frameChild3, styles.frameChildPosition]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.annaB, styles.annaTypo]}>Anna B.</Text>
      </View>
      <View style={[styles.frameView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={[styles.frameChild3, styles.frameChildPosition]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.annaB, styles.annaTypo]}>Anna K.</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.annaB, styles.annaTypo]}>Anna T.</Text>
        <View style={[styles.frameChild7, styles.frameLayout]} />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
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
  annaTypo1: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  frameChildLayout: {
    height: 74,
    width: 300,
    position: "absolute",
  },
  frameLayout: {
    height: 20,
    width: 20,
    backgroundColor: Color.colorGainsboro,
    top: "50%",
    position: "absolute",
  },
  annaPosition: {
    top: 26,
    lineHeight: 22,
    position: "absolute",
  },
  viewLayout: {
    height: 60,
    width: 296,
    position: "absolute",
  },
  frameChildPosition: {
    right: 14,
    height: 20,
    width: 20,
    backgroundColor: Color.colorGainsboro,
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    width: "6.76%",
    height: "33.33%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  annaTypo: {
    fontSize: FontSize.size_xl,
    left: 112,
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
    width: 27,
    bottom: "33.33%",
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
  frameChild: {
    marginLeft: -150,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    left: "50%",
    top: 0,
  },
  frameItem: {
    left: 13,
    marginTop: -10,
  },
  searchGlyph: {
    color: Color.labelsSecondary,
    textAlign: "left",
    left: 13,
    width: 25,
    fontFamily: FontFamily.bodyRegular,
    fontSize: FontSize.bodyRegular_size,
    top: 26,
  },
  anna: {
    left: 84,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
  },
  frameInner: {
    right: 18,
    marginTop: -10,
  },
  rectangleParent: {
    top: 374,
    left: 65,
  },
  findMemberInAppChild: {
    top: 96,
    left: 20,
    width: 49,
    height: 25,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -148,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    left: "50%",
    top: 0,
  },
  frameChild1: {
    marginTop: -10,
  },
  vectorIcon: {
    top: "33.33%",
    left: "4.39%",
    right: "88.85%",
    maxWidth: "100%",
    width: "6.76%",
    height: "33.33%",
    bottom: "33.33%",
  },
  annaS: {
    top: 20,
  },
  rectangleGroup: {
    top: 496,
    left: 67,
    width: 296,
  },
  frameChild3: {
    marginTop: -9,
  },
  vectorIcon1: {
    top: "35%",
    bottom: "31.67%",
    left: "4.39%",
    right: "88.85%",
    maxWidth: "100%",
    width: "6.76%",
    height: "33.33%",
  },
  annaB: {
    top: 19,
  },
  rectangleContainer: {
    top: 586,
    left: 67,
    width: 296,
  },
  frameView: {
    top: 676,
    left: 67,
    width: 296,
  },
  frameChild7: {
    marginTop: -12,
    right: 16,
  },
  vectorIcon3: {
    top: "30%",
    right: "89.53%",
    bottom: "36.67%",
    left: "3.72%",
    maxWidth: "100%",
    width: "6.76%",
    height: "33.33%",
  },
  rectangleParent1: {
    top: 766,
    left: 67,
    width: 296,
  },
  findMemberInApp: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default FindMemberInApp1;
