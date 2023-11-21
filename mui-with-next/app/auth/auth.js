import axios from "axios";
import { storeData, getData, storeUserId, storeName } from "../util/storage";

const url = "http://localhost:8000";

export const register = async (navigation, name, email, password) => {
  try {
    const resp = await axios.post(`${url}/auth/register`, {
      email,
      password,
      name,
    });
    const { accessToken } = resp.data;

    storeData(accessToken);
    authorise(navigation);
  } catch (error) {
    console.log("reg");
    console.log(error);
  }
};

export const logIn = async (navigation, email, password) => {
  try {
    const { data } = await axios.post(`${url}/auth/logIn`, {
      email,
      password,
    });
    const { accessToken } = data;
    storeData(accessToken);
    authorise(navigation);
  } catch (error) {
    console.log(error);
  }
};

export const authorise = async (navigation) => {
  try {
    const token = getData();
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
  navigation.push("/profile");
};
