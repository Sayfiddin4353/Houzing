import { message } from "antd";
const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  const Error = (error) => {
    message.info(error || "Something went wrong");
  };
  const request = async ({
    me,
    url,
    method = "GET",
    body = {},
    headers = {},
    token,
  }) => {
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    const options = {
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify( body ),
    };

    try {
      let res = await fetch(
        `${
          me ? `https://houzing-app.herokuapp.com/api` : REACT_APP_BASE_URL
        }${url}`,
        options
      ).then((res) => res.json());
      return res;
    } catch (error) {
      Error(error);
      return error;
    }
  };
  return request;
};

export default useRequest;
