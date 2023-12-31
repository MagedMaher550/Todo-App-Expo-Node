import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

const TodoList = ({
  todoList,
  setTodoList,
  editTodo,
  removeTodo,
  clearList,
  update,
}) => {
  const handleChange = (id) => {
    let temp = todoList.map((item) => {
      if (id === item.id) {
        update({ ...item, isChecked: !item.isChecked });
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setTodoList(temp);
  };

  return (
    <View style={styles.list}>
      {todoList.map(({ id, name, isChecked }) => {
        return (
          <View key={id} style={styles.listItem}>
            <View style={styles.listItemTextBox}>
              <Pressable onPress={() => handleChange(id)}>
                <MaterialCommunityIcons
                  name={
                    isChecked ? "checkbox-marked" : "checkbox-blank-outline"
                  }
                  size={26}
                  color="#2196F3"
                />
              </Pressable>
              <Text
                style={[
                  styles.listItemText,
                  {
                    textDecorationLine: `${
                      isChecked ? "line-through" : "none"
                    }`,
                  },
                ]}
              >
                {name}
              </Text>
            </View>
            <View style={styles.listItemIcons}>
              <TouchableOpacity onPress={() => editTodo(id)}>
                <MaterialIcons name="mode-edit" size={24} color="#2196F3" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeTodo(id)}>
                <MaterialIcons
                  style={styles.deleteIcon}
                  name="delete"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      {todoList.length < 1 ? null : (
        <TouchableOpacity style={styles.clearListBtn} onPress={clearList}>
          <Text style={styles.clearListText}>Clear List</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "80%",
  },
  listItem: {
    padding: 10,
    backgroundColor: "#FBFBFF",
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#2196F3",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 24,
    marginLeft: 5,
  },

  listItemTextBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemIcons: {
    flexDirection: "row",
  },
  deleteIcon: {
    marginLeft: 10,
  },
  clearListBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "50%",
    alignSelf: "flex-end",
  },
  clearListText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default TodoList;
