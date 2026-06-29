import axios from './axios.customize'; // video 69
const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName,
    email,
    password,
    phone,
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NjY4M2Q1YzY2MDcwOGFlYjVjOTU1OTQiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MTgxNzE2MDksImV4cCI6MTgwNDU3MTYwOX0.cNjF3UaO1BM9VhA2UxvD2BmI8vnVigfjPD4s3lxm1no";

  return axios
    .post(URL_BACKEND, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
  // console.log(">>> check :", { fullName, email, password, phone });
};
const updateUserAPI = () => {};
export { createUserAPI, updateUserAPI };
