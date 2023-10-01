import {
  Text,
  ScrollView,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import { FontAwesome } from "@expo/vector-icons";
import LabeledTextInput from "../../components/LabeledTextInput";
import Spinner from "react-native-loading-spinner-overlay";
import { logIn } from "./auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();

  const handleLinkPress = () => {
    navigation.navigate("Signup");
  };

  const emailChangeHandler = (text) => {
    setEmail(text);
  };
  const passwordChangeHandler = (text) => {
    setPassword(text);
  };

  const signinHandler = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
    if (email && password) {
      logIn(navigation, email, password, setIsLoading, setIsError);
      setEmail("");
      setPassword("");
    }
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

  if (isError) {
    toast.show("Error in email or password", {
      type: "danger",
      placement: "bottom",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  }

  return (
    <ScrollView style={styles.stretch}>
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name="user-circle-o"
          size={120}
          color="#2196F3"
        />
        <LabeledTextInput
          label="Email:"
          value={email}
          changeHandler={emailChangeHandler}
        />
        <LabeledTextInput
          label="Password:"
          value={password}
          changeHandler={passwordChangeHandler}
          isPasswordInputText={true}
        />
        <View style={styles.btnWrapper}>
          <Button
            title="Sign-in"
            onPress={signinHandler}
            color="#2196F3" // Customize button color (optional)
          />
          <Text>
            Don't have an account yet?
            <TouchableOpacity onPress={handleLinkPress}>
              <Text style={styles.link}>Signup</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stretch: {
    alignSelf: "stretch",
  },

  container: {
    marginTop: 100,
    alignItems: "center",
  },

  btnWrapper: {
    marginTop: 10,
    marginBottom: 10,
    width: 225,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginLeft: 5,
    marginTop: 5,
  },
});
