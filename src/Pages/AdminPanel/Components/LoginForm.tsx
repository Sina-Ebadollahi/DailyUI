import { useEffect, useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import useFetch from "../../../Hooks/useFetch";

export default function LoginForm() {
  const [error, setError] = useState<string | null>("");
  const [emailAddress, setEmailAddress] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const f = useFetch();
  // useEffect(() => {
  //     return () => {
  //         setTimeout(() => {
  //             setError('');
  //         },3000);
  //     }
  // },[])
  const handleFormSubmitButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="h-100 d-flex justify-content-center align-items-center"
    >
      <Form style={{ outline: "1px solid blue" }} className="p-5">
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
          className="mt-4"
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
