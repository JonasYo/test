import axios from "axios";

axios.defaults.baseURL = "https://localhost:8080/api/v1/";
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error") {
      error.response = {
        status: 500,
        data: {
          message: "Network Error | Network Unavailable",
        },
      };
    }

    // ? Handle case for 4xx HTTP CODE i.e unauthorized (logout user)
    // ? Handle case for 5xx HTTP CODE i.e server errors (something went wrong)
    return Promise.reject(error);
  }
);

export default axios;
