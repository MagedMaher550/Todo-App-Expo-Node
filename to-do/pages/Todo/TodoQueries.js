import axios from "axios";
import { getUserId } from "../../utils/storage";

const url = "http://192.168.1.5:8000";

export const fetchData = async (setTodoList) => {
  const userId = await getUserId();
  try {
    console.log(`userId: ${userId}`);
    const { data } = await axios.get(`${url}/todo/${userId}`);

    console.log("DATA:-")
    console.log(data)
    console.log("DATA:-")

    console.log("Login in fetch");
    setTodoList(data);
  } catch (error) {
    console.log("fetch");
    console.log(error);
  }
};

export const deletetodo = async (id) => {
  try {
    const resp = await axios.delete(`${url}/todo/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const clear = async (userId) => {
  try {
    const resp = await axios.delete(`${url}/todo/clear`, {
      userId,
    });
  } catch (error) {
    console.log("clear");
    console.log(error);
  }
};

export const add = async (todoText, userId) => {
    console.log("ADDING");
    console.log("ADDING");
    console.log("ADDING");
  try {
    const resp = await axios.post(`${url}/todo/`, {
      name: todoText,
      isChecked: false,
      userId,
    });
    return resp.data.id;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (item) => {
  try {
    const resp = await axios.put(`${url}/todo/${item.id}`, item);
  } catch (error) {
    console.log(error);
  }
};
