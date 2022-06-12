import { useEffect, useState } from "react"
import { Container, Form, Button } from "react-bootstrap";
export default function LoginForm() {
    const [error, setError] = useState<string | null>("");
    const [emailAddress, setEmailAddress] = useState<string | null>("");
    const [password, setPassword] = useState<string | null>("");
    // useEffect(() => {
    //     return () => {
    //         setTimeout(() => {
    //             setError('');
    //         },3000);
    //     }
    // },[])
    const handleFormSubmitButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    }
  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Form style={{outline: "1px solid blue"}} className="p-5">
        <Form.Label> Enter Email </Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmailAddress(e.target.value)} />
        {error ? (<Form.Text className="text-muted">{error}</Form.Text>) : null}
        <Form.Label> Enter Password </Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <Button className="m-2" type="submit" variant="primary" onClick={(e) => handleFormSubmitButton(e)}>Submit</Button>
      </Form>

    </Container>
    
  )
}
