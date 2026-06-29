import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios"; // video 69

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
      fullName,
      email,
      password,
      phone,
    };

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NjY4M2Q1YzY2MDcwOGFlYjVjOTU1OTQiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MTgxNzE2MDksImV4cCI6MTgwNDU3MTYwOX0.cNjF3UaO1BM9VhA2UxvD2BmI8vnVigfjPD4s3lxm1no";

    axios
      .post(URL_BACKEND, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    console.log(">>> check :", { fullName, email, password, phone });
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div>
          <Button
            type="primary"
            // onClick={()=>{handleBtn()}}
            onClick={handleBtn}
          >
            {" "}
            Create User{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
