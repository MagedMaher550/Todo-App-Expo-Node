import axios from "axios";
import {
    storeData,
    getData,
    storeUserId,
    storeName,
} from "../../utils/storage";

const url = "http://192.168.1.5:8000";

export const register = async (
    navigation,
    email,
    password,
    name,
    setIsLoading
) => {
    try {
        setIsLoading(true);
        const resp = await axios.post(`${url}/auth/register`, {
            email,
            password,
            name,
        });
        const { accessToken } = resp.data;

        storeData(accessToken);
        authorise(navigation);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        console.log("reg");
        console.log(error);
    }
};

export const logIn = async (
    navigation,
    email,
    password,
    setIsLoading,
    setIsError
) => {
    setIsLoading(true);
    try {
        const { data } = await axios.post(`${url}/auth/logIn`, {
            email,
            password,
        });
        const { accessToken } = data;
        storeData(accessToken);
        authorise(navigation);
        console.log("Login");
        console.log(`email: ${email}, password: ${password}`);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log("login");
        console.log(error);
    }
    setIsError(false);
};

export const authorise = async (navigation) => {
    try {
        const token = await getData();
        const { data } = await axios.get(`${url}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        storeUserId(data.id);
        storeName(data.name);
    } catch (error) {
        console.log("auth");
        console.log(error);
    }
    navigation.navigate("Todo");
};