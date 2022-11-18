import axios from "axios";
const urlEnv = process.env.REACT_APP_BE_URL
console.log(urlEnv)


const addNewUrl = async (payload) => {
    try {
        const url = `${urlEnv}/resource/add`;
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

const getUrls = async () => {
    try {
        const url = `${urlEnv}/resource`;
        const response = await axios.get(
            url,
            { withCredentials: true, responseType: "json", baseURL: "" }
        );
        return response
    } catch (error) {
        throw Error(error?.response?.data?.message)
    }
};

const linkUrl = async (shortId) => {
    try {
        const url = `${urlEnv}/resource/${shortId}`;
        const response = await axios.get(
            url,
            { withCredentials: true, responseType: "json", baseURL: "" }
        );
        return response
    } catch (error) {
        throw Error(error?.response?.data?.message)
    }
};

export { addNewUrl, getUrls, linkUrl } 