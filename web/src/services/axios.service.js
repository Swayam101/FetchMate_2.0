import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
console.log("BASE URL : ", BASE_URL);

const request = async (options) => {
  const token = localStorage.getItem("authToken");
  axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
  const onSuccess = (response) => {
    console.log("axios response success : ", response);
    return {
      ...response,
    };
  };
  const onError = (error) => {
    console.log("axios on error : ", error);

    return { ...error };
  };
  try {
    const response = await axiosInstance(options);
    return onSuccess(response.data);
  } catch (error) {
    return onError(error);
  }
};

export default request;
