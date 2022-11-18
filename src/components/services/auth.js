import axios from "axios";
const urlEnv = process.env.REACT_APP_BE_URL
console.log(urlEnv)

const login = async (payload) => {
  try {
    const url = `${urlEnv}/users/login`;
    const response = await axios.post(
      url,
      { ...payload },
      { withCredentials: true, responseType: "json", baseURL: "" }
    );
    return response
  } catch (error) {
    throw Error(error?.response?.data?.message)
  }
};

const checkStatus = async () => {
  try {
    const url = `${urlEnv}/users`;
    const response = await axios.get(url, {
      withCredentials: true,
      responseType: "json",
      baseURL: ""
    });
    return response?.data;
  } catch (error) {
    return
  }
};
const logout = async () => {
  try {
    const url = `${urlEnv}/users/logout`;
    const response = await axios.get(url, {
      withCredentials: true,
      responseType: "json",
      baseURL: ""
    });
    return response?.data;
  } catch (error) {
    throw Error(error?.response?.data?.message)
  }
};

const register = async (payload) => {
  try {
    const url = `${urlEnv}/users/register`;
    const response = await axios.post(
      url,
      { ...payload },
      { withCredentials: true, responseType: "json", baseURL: "" }
    );
    return response
  } catch (error) {
    throw Error(error?.response?.data?.message)
  }
}

const forgotPassword = async (payload) => {
  try {
    const url = `${urlEnv}/users/forgot-password`;
    const response = await axios.post(
      url,
      { ...payload },
      { withCredentials: true, responseType: "json", baseURL: "" }
    );
    return response
  } catch (error) {
    throw Error(error?.response?.data?.message)
  }
}

export { login, checkStatus, logout, register, forgotPassword };
