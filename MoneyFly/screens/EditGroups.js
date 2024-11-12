import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const EditGroups = () => {
  return (
    <View style={styles.editGroups}>
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
        <View style={[styles.item10, styles.itemSpaceBlock]}>
          <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
            Delete
          </Text>
          <Text style={styles.symbol}>􀈑</Text>
        </View>
        <View style={[styles.item7, styles.itemBorder]}>
          <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
            Rename
          </Text>
          <Text style={[styles.symbol1, styles.symbolLayout]}>􀈊</Text>
        </View>
        <View style={[styles.item101, styles.itemPosition1]}>
          <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
            Rename
          </Text>
          <Text style={[styles.symbol2, styles.symbolLayout]}>􀈊</Text>
        </View>
        <View style={[styles.item8, styles.itemPosition]}>
          <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
            Rename
          </Text>
          <Text style={[styles.symbol2, styles.symbolLayout]}>􀈊</Text>
        </View>
        <View style={[styles.item9, styles.itemBorder]}>
          <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
            Rename
          </Text>
          <Text style={[styles.symbol2, styles.symbolLayout]}>􀈊</Text>
        </View>
        <View style={[styles.item91, styles.itemPosition3]}>
          <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
            Delete
          </Text>
          <Text style={styles.symbol}>􀈑</Text>
        </View>
        <View style={[styles.item102, styles.itemPosition]}>
          <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
            Delete
          </Text>
          <Text style={styles.symbol}>􀈑</Text>
        </View>
        <View style={[styles.item11, styles.itemPosition1]}>
          <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
            Delete
          </Text>
          <Text style={styles.symbol}>􀈑</Text>
        </View>
      </View>
      <Text style={styles.groups}>Groups</Text>
      <Text style={styles.save}>Save</Text>
      <Image
        style={[styles.editGroupsChild, styles.tripLayout]}
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
    width: 296,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  tripLayout: {
    height: 25,
    position: "absolute",
  },
  itemSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 50,
    top: 225,
    alignItems: "center",
    position: "absolute",
  },
  labelTypo: {
    display: "none",
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    overflow: "hidden",
    flex: 1,
  },
  itemBorder: {
    height: 51,
    borderBottomWidth: 0.5,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderStyle: "solid",
  },
  symbolLayout: {
    height: 43,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
  },
  itemPosition1: {
    top: 335,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 50,
    alignItems: "center",
    position: "absolute",
  },
  itemPosition: {
    top: 115,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 50,
    alignItems: "center",
    position: "absolute",
  },
  itemPosition3: {
    top: 5,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 50,
    alignItems: "center",
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "36.96%",
    fontWeight: "600",
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    color: Color.labelsPrimary,
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
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
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
  groupChild: {
    top: 110,
    left: 0,
    width: 296,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
  },
  groupItem: {
    top: 220,
    left: 0,
    width: 296,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
  },
  groupInner: {
    marginLeft: -151.5,
    top: 330,
    left: "50%",
  },
  rectangleView: {
    left: 0,
    width: 296,
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
    marginLeft: -73.5,
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
    marginLeft: -73.5,
  },
  tripToEstonia: {
    marginTop: 42,
    marginLeft: -72.5,
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
    marginLeft: -73.5,
  },
  label: {
    color: Color.colorsRed,
  },
  symbol: {
    color: Color.colorRed,
    height: 44,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
  },
  item10: {
    height: 50,
    left: 253,
  },
  label1: {
    color: Color.labelsPrimary,
    display: "none",
    textAlign: "left",
    letterSpacing: 0,
  },
  symbol1: {
    color: "#1e00ff",
  },
  item7: {
    left: 218,
    borderBottomWidth: 0.5,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    top: 5,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 50,
    alignItems: "center",
    position: "absolute",
  },
  symbol2: {
    color: Color.colorMediumblue,
  },
  item101: {
    height: 51,
    borderBottomWidth: 0.5,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderStyle: "solid",
    left: 218,
  },
  item8: {
    left: 219,
    height: 51,
    borderBottomWidth: 0.5,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderStyle: "solid",
  },
  item9: {
    left: 218,
    borderBottomWidth: 0.5,
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 50,
    top: 225,
    alignItems: "center",
    position: "absolute",
  },
  item91: {
    height: 50,
    left: 253,
  },
  item102: {
    height: 50,
    left: 253,
  },
  item11: {
    height: 50,
    left: 253,
  },
  rectangleParent: {
    top: 304,
    left: 67,
    width: 303,
    height: 390,
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
  save: {
    top: 94,
    left: 363,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  editGroupsChild: {
    top: 96,
    left: 20,
    width: 49,
  },
  editGroups: {
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default EditGroups;
