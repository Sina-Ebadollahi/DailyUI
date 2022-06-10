import { useEffect, useState } from "react"
import { Container,  Form } from "react-bootstrap"
export default function LoginForm() {
    const [error, setError] = useState<string | null>("");
    const [emailAddress, setEmailAddress] = useState<string | null>("");
    // useEffect(() => {
    //     return () => {
    //         setTimeout(() => {
    //             setError('');
    //         },3000);
    //     }
    // },[])
  return (
    <Container fluid>
        <Container >
        <Form>
            <Form.Group>
                <Form.Label >
                    Email Address
                </Form.Label>
                <Form.Control onChange={(e) => setEmailAddress(e.target.value)} placeholder="Email" type="email" />
                {error ? (<Form.Text style={{color: 'red'}}>{error}</Form.Text>) : null}
                
            </Form.Group>
        </Form>

        </Container>
    </Container>
  )
}
