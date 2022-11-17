import axios from "axios";
const login = async (payload) => {
  try {
    const url = "https://jwt-auth-be-123.herokuapp.com/users/login";
    const response = await axios.post(
      url,
      { ...payload },
      { withCredentials: true, responseType: "json" }
    );
    console.log(response);
    const dd = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(payload),
    });

    const rr = await dd.json();
    console.log("rr", rr);
  } catch (error) {
    console.log(error);
  }
};

const checkStatus = async () => {
  try {
    const url = "https://jwt-auth-be-123.herokuapp.com/users/";
    const response = await axios.get(url, {
      withCredentials: true,
      responseType: "json",
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
const logout = async () => {
  try {
    const url = "https://jwt-auth-be-123.herokuapp.com/users/logout";
    const response = await axios.get(url, {
      withCredentials: true,
      responseType: "json",
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export { login, checkStatus, logout };
