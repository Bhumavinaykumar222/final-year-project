import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../style/Theme";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
const HomeScreen = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.icon}>
        <Image source={require("../../assets/images/headLogo.png")} />
      </View>
      <Text style={styleSheet.heading}>Food for Everyone</Text>
      <View style={styleSheet.images}>
        <Image style={styleSheet.imageL} source={require("./face_1.png")} />
        <Image style={styleSheet.imageR} source={require("./face_2.png")} />
      </View>
      <LinearGradient
        style={styleSheet.buttonBase}
        colors={["#FF470B1A", "#FF470B"]}
      >
        <Pressable style={styleSheet.buttonStyle}>
          <Text
            style={{
              color: theme.colors.font.primary,
              fontWeight: theme.font.fontWeight.medium,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};
const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  icon: {
    width: 73,
    height: 73,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    marginLeft: 28,
  },
  heading: {
    fontSize: theme.font.fontSize.large,
    color: theme.colors.white,
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 67,
    marginLeft: 30,
    marginVertical: 15,
  },
  imageR: {
    zIndex: -1,
    position: "absolute",
    right: 0,
  },
  imageL: {
    // zIndex: -1,
    position: "absolute",
    left: 0,
  },
  images: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  buttonBase: {
    width: "100%",
    height: "30%",
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonStyle: {
    borderRadius: 70,
    paddingVertical: 12,
    height: 70,
    width: "90%",
    backgroundColor: theme.colors.white,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
