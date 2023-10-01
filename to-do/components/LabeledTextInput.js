import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LabeledTextInput(props) {
  return (
    <View>
      <Text>{props.label} </Text>
      <TextInput
        keyboardType="default"
        value={props.value}
        onChangeText={props.changeHandler}
        style={styles.inputText}
        secureTextEntry={props.isPasswordInputText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 225,
    height: 35,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FACBEA",
  },
});
