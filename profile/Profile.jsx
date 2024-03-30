import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { theme } from "../../style/Theme";
import { useState } from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./Group.png")} style={{ width: "100%" }} />
      <View style={styles.profile}>
        <Iconify
          icon="iconamoon:profile-circle-fill"
          color={"#003665"}
          size={108}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.input}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.inputField}>Full Name</TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>E-Mail</Text>
          <TextInput style={styles.inputField}>kyc@gmail.com</TextInput>
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.inputField}>+9100000000</TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  profile: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
    top: 120,
  },
  label: {
    fontSize: 16,
    fontWeight: theme.font.fontWeight.medium,
    color: theme.colors.tertiary,
  },
  input: {
    marginVertical: 5,
  },
  inputField: {
    fontSize: 20,
    paddingVertical: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.orange.secondary,
  },
});

export default Profile;
