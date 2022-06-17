import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
export default function LoginForm() {
  const [error, setError] = useState<string | null>("");
  const [emailAddress, setEmailAddress] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [authData, setAuthData] = useState<object>({});
  const f = useFetch();
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch({ type: "LOG_IN", payload: authData });

      nav("/Admin");
    }

    return () => {
      setTimeout(() => {
        setError("");
      }, 3000);
    };
  }, [isAuth]);
  const handleFormSubmitButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (emailAddress && password) {
      let reqUrl = `localhost:3003/data?user=${emailAddress}&password=${password}`;
      const jsonData: object = f.fetchFunction(reqUrl, "GET");
      let temp = {
        user: "Sina",
        password: "temp123",
      };
      if (jsonData === { emailAddress, password }) {
        setIsAuth(true);
        setAuthData(jsonData);
      }
    }
  };
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="h-100 d-flex justify-content-center align-items-center"
    >
      <Form style={{ outline: "1px solid blue" }} className="p-5 m-lg-3">
        <Form.Label> Enter Email </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        {error ? <Form.Text className="text-muted">{error}</Form.Text> : null}
        <Form.Label> Enter Password </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mt-3"
          type="submit"
          variant="primary"
          onClick={(e) => handleFormSubmitButton(e)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
