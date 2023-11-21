export const storeUserId = (value) => {
  try {
    localStorage.setItem("@userId", `${value}`);
  } catch (e) {
    console.log("storeData Error");
  }
};

export const getUserId = () => {
  try {
    const value = localStorage.getItem("@userId");
    if (value !== null) {
      // value previously stored
      console.log(value);
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
export const storeData = (value) => {
  try {
    localStorage.setItem("@accessToken", value);
  } catch (e) {
    console.log("storeData Error");
  }
};

export const getData = () => {
  try {
    const value = localStorage.getItem("@accessToken");
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
export const storeName = (value) => {
  try {
    localStorage.setItem("@name", value);
  } catch (e) {
    console.log("storeData Error");
  }
};

export const getName = async () => {
  try {
    const value = localStorage.getItem("@name");
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
