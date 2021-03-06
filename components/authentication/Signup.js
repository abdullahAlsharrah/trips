import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthButton,
  AuthButtonText,
  AuthTextInput,
  AuthOther,
} from "../../styles";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
  };
  return (
    <>
      {authStore.user ? (
        navigation.navigate("Home")
      ) : (
        <AuthContainer>
          <AuthTitle>Signup</AuthTitle>
          <AuthTextInput
            onChangeText={(username) => setUser({ ...user, username })}
            placeholder="Username"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(password) => setUser({ ...user, password })}
            placeholder="Password"
            placeholderTextColor="#A6AEC1"
            secureTextEntry={true}
          />
          <AuthTextInput
            onChangeText={(firstName) => setUser({ ...user, firstName })}
            placeholder="First name"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(lastName) => setUser({ ...user, lastName })}
            placeholder="Last name"
            placeholderTextColor="#A6AEC1"
          />
          <AuthTextInput
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="email"
            placeholderTextColor="#A6AEC1"
          />
          <AuthOther onPress={() => navigation.navigate("Signin")}>
            Click here to Login !
          </AuthOther>
          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Sign up</AuthButtonText>
          </AuthButton>
        </AuthContainer>
      )}
    </>
  );
};

export default observer(Signup);
