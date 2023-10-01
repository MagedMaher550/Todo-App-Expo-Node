import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { Avatar } from "@rneui/themed";
import { getName } from "../utils/storage";

const Header = ({ logout }) => {
    const [name, setName] = useState("");
    const [letter, setLetter] = useState("");
    const getUserName = async () => {
        try {
            const userName = await getName();
            if (userName !== null) {
                setName(userName);
                setLetter(userName[0].toUpperCase());
            }
        } catch (error) {
            console.log(error);
        }
    };
    console.log(getUserName());
    return (
        <View style={styles.header}>
            <View style={styles.avatar}>
                <Avatar
                    size={45}
                    rounded
                    title={letter}
                    containerStyle={{
                        backgroundColor: "#FBFBFF",
                        marginLeft: 15,
                    }}
                    titleStyle={{ color: "#2196F3" }}
                />
                <Text style={styles.title}>{name}</Text>
                {/* Logout */}
            </View>

            <TouchableOpacity style={styles.button} onPress={() => logout()}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            {/* Logout */}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#2196F3",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    avatar: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: "#FFF",
        marginLeft: 15,
        fontSize: 25,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#FBFBFF",
        padding: 10,
        borderRadius: 5,
        marginRight: 15,
    },
    buttonText: {
        color: "#2196F3",
        fontWeight: "600",
        fontSize: 18,
    },
});

export default Header;