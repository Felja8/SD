import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddExpense = () => {
  return (
    <View style={styles.addExpense}>
      <View style={styles.statusBar}>
        <View style={styles.time}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={styles.levels}>
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
      <Text style={styles.newExpense}>New Expense</Text>
      <Image
        style={styles.addExpenseChild}
        contentFit="cover"
        source={require("../assets/group-471.png")}
      />
      <View style={[styles.members, styles.groupsPosition]}>
        <View style={styles.header}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
            contentFit="cover"
            source={require("../assets/iconsregularplus.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.label11Typo}>Memebers</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularplusLayout}
            contentFit="cover"
            source={require("../assets/iconsregularchevronups.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsList}>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus1.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus2.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover3, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus4.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={styles.labelLayout}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover4, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus5.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.membersChild} />
      </View>
      <View style={[styles.groups, styles.groupsPosition]}>
        <View style={styles.header}>
          <Image
            style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
            contentFit="cover"
            source={require("../assets/iconsregularplus.png")}
          />
          <View style={styles.menuLabel}>
            <Text style={styles.label11Typo}>Groups</Text>
          </View>
          <View style={[styles.label1, styles.labelLayout2]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
          </View>
          <View style={[styles.label4, styles.labelLayout]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
          </View>
          <View style={[styles.label2, styles.labelLayout1]}>
            <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
          </View>
          <Image
            style={styles.iconsregularplusLayout}
            contentFit="cover"
            source={require("../assets/iconsregularchevronups.png")}
          />
        </View>
        <View style={styles.itemsFrame}>
          <View style={styles.itemsList}>
            <View style={[styles.itemHover, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus1.png")}
              />
              <View style={styles.labelLayout2}>
                <Text style={[styles.label11, styles.label11Typo]}>Spain</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover1, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus2.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={[styles.label11, styles.label11Typo]}>
                  England
                </Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover2, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus3.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={[styles.label11, styles.label11Typo]}>Latvia</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover3, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus4.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={styles.labelLayout}>
                <Text style={[styles.label11, styles.label11Typo]}>Narnia</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label5</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
            <View style={[styles.itemHover4, styles.itemFlexBox]}>
              <Image
                style={[styles.iconsregularplus, styles.iconsregularplusLayout]}
                contentFit="cover"
                source={require("../assets/iconsregularplus5.png")}
              />
              <View style={[styles.label1, styles.labelLayout2]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label1</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label2</Text>
              </View>
              <View style={[styles.label2, styles.labelLayout1]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label3</Text>
              </View>
              <View style={[styles.label4, styles.labelLayout]}>
                <Text style={[styles.label11, styles.label11Typo]}>Label4</Text>
              </View>
              <View style={styles.labelLayout1}>
                <Text style={[styles.label11, styles.label11Typo]}>Poland</Text>
              </View>
              <Image
                style={styles.iconsregularplusLayout}
                contentFit="cover"
                source={require("../assets/iconsregularchevrondowns.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.membersChild} />
      </View>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.frameItem, styles.frameItemPosition]} />
        <Image
          style={[styles.frameInner, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-48.png")}
        />
        <Text style={styles.enterName}>Enter name</Text>
        <View style={[styles.rectangleView, styles.frameItemPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  capacityPosition: {
    backgroundColor: Color.labelsPrimary,
    left: "50%",
    position: "absolute",
  },
  groupsPosition: {
    height: 300,
    width: 350,
    marginLeft: -175,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  iconsregularplusLayout: {
    height: 38,
    width: 38,
  },
  labelLayout2: {
    height: 34,
    width: 86,
  },
  label11Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0.7,
    fontSize: FontSize.size_3xl_9,
  },
  labelLayout1: {
    width: 94,
    height: 34,
  },
  labelLayout: {
    width: 96,
    height: 34,
  },
  itemFlexBox: {
    paddingHorizontal: 46,
    paddingVertical: 21,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameChildLayout: {
    height: 74,
    width: 300,
    position: "absolute",
  },
  frameItemPosition: {
    height: 20,
    backgroundColor: Color.colorGainsboro,
    marginTop: -10,
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
    width: "35.74%",
    marginTop: -27,
    top: "50%",
    height: 54,
    position: "absolute",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
    top: "0%",
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
    left: "64.26%",
    right: "0%",
    top: "50%",
    width: "35.74%",
    marginTop: -27,
    height: 54,
    position: "absolute",
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
    left: "50%",
    position: "absolute",
  },
  newExpense: {
    marginLeft: -155,
    top: 140,
    fontSize: FontSize.size_31xl,
    lineHeight: 45,
    display: "flex",
    width: 308,
    height: 112,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    left: "50%",
    position: "absolute",
  },
  addExpenseChild: {
    top: 96,
    left: 20,
    width: 49,
    height: 25,
    position: "absolute",
  },
  iconsregularplus: {
    display: "none",
  },
  menuLabel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label11: {
    top: "0%",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 34,
    letterSpacing: 0.7,
    fontSize: FontSize.size_3xl_9,
    left: "0%",
    position: "absolute",
  },
  label1: {
    display: "none",
  },
  label2: {
    display: "none",
  },
  label4: {
    display: "none",
  },
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: Color.colorMediumslateblue,
    borderWidth: 2.5,
    paddingHorizontal: 34,
    zIndex: 2,
    paddingVertical: 21,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
    borderStyle: "solid",
  },
  itemHover: {
    zIndex: 4,
  },
  itemHover1: {
    zIndex: 3,
  },
  itemHover2: {
    zIndex: 2,
  },
  itemHover3: {
    zIndex: 1,
  },
  itemHover4: {
    zIndex: 0,
  },
  itemsList: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    height: 417,
    justifyContent: "flex-end",
    backgroundColor: Color.white,
    alignItems: "center",
    bottom: 0,
    right: "0%",
    left: "0%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  itemsFrame: {
    height: 419,
    zIndex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  membersChild: {
    marginTop: -1827.4,
    marginLeft: -3152.1,
    width: 6302,
    height: 3653,
    zIndex: 0,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  members: {
    top: 634,
  },
  groups: {
    top: 505,
    display: "none",
  },
  frameChild: {
    marginLeft: -150,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkgray,
    left: "50%",
    top: 0,
    width: 300,
  },
  frameItem: {
    right: 264,
    width: 23,
  },
  frameInner: {
    height: "27.03%",
    width: "7.67%",
    top: "36.49%",
    right: "88%",
    bottom: "36.49%",
    left: "4.33%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  enterName: {
    top: 26,
    left: 60,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    position: "absolute",
  },
  rectangleView: {
    right: 18,
    width: 20,
  },
  rectangleParent: {
    top: 354,
    left: 65,
  },
  addExpense: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 1267,
    width: "100%",
  },
});

export default AddExpense;
