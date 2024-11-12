import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AddMember1 = () => {
  return (
    <View style={styles.addMember}>
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
      <Text style={[styles.creatingAMember, styles.enterNameTypo]}>
        Creating a Member
      </Text>
      <Image
        style={styles.addMemberChild}
        contentFit="cover"
        source={require("../assets/group-47.png")}
      />
      <View style={[styles.addMemberItem, styles.addLayout]} />
      <View style={[styles.addMemberInner, styles.addLayout]} />
      <Text style={[styles.addMember1, styles.addTypo]}>Add Member</Text>
      <Text style={[styles.addMemberManually, styles.addTypo]}>
        Add Member Manually
      </Text>
      <View style={styles.rectangleView} />
      <View style={[styles.addMemberChild1, styles.addChildPosition]} />
      <Text style={[styles.enterName, styles.enterNameTypo]}>Enter name</Text>
      <View style={[styles.addMemberChild2, styles.addChildPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.memberSuccessfullyAdded, styles.addTypo]}>
        Member successfully added!
      </Text>
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
    position: "absolute",
  },
  addLayout: {
    height: 60,
    width: 296,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_xl,
    marginLeft: -148,
    left: "50%",
    position: "absolute",
  },
  addTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  addChildPosition: {
    height: 20,
    width: 20,
    backgroundColor: Color.colorGainsboro,
    marginTop: -65,
    top: "50%",
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
  creatingAMember: {
    marginLeft: -153,
    top: 137,
    fontSize: FontSize.size_31xl,
    lineHeight: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 308,
    height: 112,
    left: "50%",
  },
  addMemberChild: {
    top: 96,
    left: 20,
    width: 49,
    height: 25,
    position: "absolute",
  },
  addMemberItem: {
    top: 496,
  },
  addMemberInner: {
    top: 586,
  },
  addMember1: {
    top: 516,
    left: 154,
    color: Color.labelsPrimary,
    fontSize: FontSize.size_xl,
  },
  addMemberManually: {
    top: 605,
    left: 109,
    color: Color.labelsPrimary,
    fontSize: FontSize.size_xl,
  },
  rectangleView: {
    marginLeft: -150,
    top: 374,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    width: 300,
    height: 74,
    left: "50%",
    position: "absolute",
  },
  addMemberChild1: {
    left: 78,
  },
  enterName: {
    top: 400,
    left: 125,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
  },
  addMemberChild2: {
    right: 83,
  },
  vectorIcon: {
    height: "2.15%",
    width: "4.65%",
    top: "43.03%",
    right: "77.21%",
    bottom: "54.83%",
    left: "18.14%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  memberSuccessfullyAdded: {
    marginLeft: -158,
    top: 295,
    color: "#009e0d",
    width: 315,
    height: 34,
    left: "50%",
  },
  addMember: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default AddMember1;
