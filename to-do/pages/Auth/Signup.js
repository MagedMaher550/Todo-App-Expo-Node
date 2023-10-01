import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import LabeledTextInput from "../../components/LabeledTextInput";
import Spinner from "react-native-loading-spinner-overlay";
import { register } from "./auth";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (text) => {
    setEmail(text);
  };
  const passwordChangeHandler = (text) => {
    console.log("password: ", password);
    setPassword(text);
  };

  const nameChangeHandler = (text) => {
    setName(text);
  };

  const signupHandler = () => {
    if (email && name && password) {
      register(navigation, email, password, name, setIsLoading);
      setEmail("");
      setName("");
      setPassword("");
    }
  };

  const handleLinkPress = () => {
    navigation.navigate("Signin");
  };

  if (isLoading) {
    return (
      <Spinner
        color="#2196F3"
        size={100}
        visible={isLoading}
        animation="slide"
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
    );
  }

  return (
    <ScrollView style={styles.stretch}>
      <View style={styles.container}>
        <FontAwesome name="user-circle-o" size={120} color="#2196F3" />
        <LabeledTextInput
          label="Email:"
          value={email}
          changeHandler={emailChangeHandler}
        />
        <LabeledTextInput
          label="Name:"
          value={name}
          changeHandler={nameChangeHandler}
        />
        <LabeledTextInput
          label="Password:"
          value={password}
          changeHandler={passwordChangeHandler}
          isPasswordInputText={true}
        />
        <View style={styles.btnWrapper}>
          <Button
            title="Sign-up"
            onPress={signupHandler}
            color="#2196F3" // Customize button color (optional)
          />
        </View>
        <Text>
          Already have an account?
          <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.link}>Signin</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stretch: {
    alignSelf: "stretch",
  },
  icon: {
    marginBottom: 15,
  },
  btnWrapper: {
    marginTop: 10,
    marginBottom: 10,
    width: 225,
  },

  container: {
    alignItems: "center",
    marginTop: 75,
  },

  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});
