import { useEffect, useState } from "react"
import { Container,  Form } from "react-bootstrap"
export default function LoginForm() {
    const [error, setError] = useState<string | null>("");
    useEffect(() => {
        return () => {
            setTimeout(() => {
                setError('');
            },3000);
        }
    },[])
  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label >
                    Email Address
                </Form.Label>
                <Form.Control placeholder="Email" type="email" />
                {error ? (<Form.Text style={{color: 'red'}}>{error}</Form.Text>) : null}
                
            </Form.Group>
        </Form>
    </Container>
  )
}
