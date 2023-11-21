import axios from "axios";
import { getUserId } from "../util/storage";

const url = "http://localhost:8000";

export const fetchData = async (setTodoList) => {
  const userId = getUserId();
  try {
    const { data } = await axios.get(`${url}/todo/${userId}`);
    setTodoList(data);
  } catch (error) {
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

export const addToDo = async (todoText) => {
  try {
    const userId = parseInt(getUserId());
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
