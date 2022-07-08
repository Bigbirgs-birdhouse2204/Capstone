import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, Provider } from "react-redux";
import axios from "axios";

import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticate } from "../store";

const SignInScreen = ({ navigation }) => {
  // Local State:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onCreateAccountPressed = () => {
    navigation.navigate("Sign Up");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };

  // store the token then navigate to the app's main screen


  const loginTest = async () => {
    try {
      // let formData = {
      //   email,
      //   password,
      // };

      dispatch(authenticate(email, password, 'login', navigation))
      // const res = await axios.post(
      //   `https://redy-capstone.herokuapp.com/auth/login`,
      //   formData
      // );
      // await AsyncStorage.setItem("token", res.data.token);

      console.log(
        // await AsyncStorage.getItem("token").then(navigation.navigate("Home"))
      );
      // return res.data;
    } catch (authError) {
      console.log(authError);
      return authError;
    }
  };
  // const storeToken = () => {
  //   SecureStore.setItemAsync("token", "abc").then(navigation.navigate("Home"));
  // };

  // RENDER THE FOLLOWING:
  return (
    <SafeAreaView style={styles.logotitle}>
      <Image style={styles.logo} source={require("../assets/Redy.png")} />
      <Text style={styles.title}>Redy</Text>

      {/* <Image source={{ uri: 'https://ibb.co/THmST7C' }} />; */}
      <CustomInput
        inputField={"Email"}
        value={email}
        // onChangeText = {text => setEmail(text)}
        setValue={setEmail}
        secureTextEntry={false}
      />
      <CustomInput
        inputField={"Password"}
        value={password}
        // onChangeText = {text => setPassword(text)}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={loginTest} />
      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <CustomButton
        text="Dont have an Account? Click Here"
        onPress={onCreateAccountPressed}
      >
        Dont have an account? Create one!
      </CustomButton>
    </SafeAreaView>
  );
};
// STYLES
const styles = StyleSheet.create({
  logotitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 150,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: "center",
    maxWidth: 300,
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});

SignInScreen.navigationOptions = {
  title: "Sign In",
};

export default SignInScreen;
