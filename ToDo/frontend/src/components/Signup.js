import React from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { UserContext } from "./UserContext";
const SignUp = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const onSignInPressed = async () => {
    const data = {
      username: username,
      email: Email,
      password: password,
    };
    if (password == repeatPassword) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users/register",
          data
        );
        setUser(response.data);
        if (response.data.email !== "") {
          setError(false);
          navigation.navigate("HomeScreen");
        } else {
          setError(true);
          setErrormsg("email already exists");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
      setErrormsg("password not matching");
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={Email}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          secureTextEntry={true}
          onChangeText={setRepeatPassword}
          value={repeatPassword}
        />
      </View>
      {error && <Text style={{ color: "red" }}>{errormsg}</Text>}
      <TouchableOpacity style={styles.continueButton} onPress={onSignInPressed}>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
          Register
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        By registering, you confirm that you accept our{" "}
        <Text style={styles.link}>Terms of Use</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#F9FBFC",
          alignItems: "center",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <Text style={{ color: "gray", fontWeight: "bold" }}>
          Already have an account? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F9FBFC",
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#37306B",
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: 45,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  input: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 1,
  },
  continueButton: {
    backgroundColor: "#E06469",
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  text: {
    color: "gray",
    textAlign: "center",
  },
  link: {
    color: "#FBD075",
  },
});
export default SignUp;
