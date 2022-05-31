import { Button, Container, Row, Col, Alert, Image,  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BootstrapTest() {
  return (
    <Container  fluid >
        <Col>
          <Row></Row>
          <Row></Row>

        </Col>
        <Button as="col" variant='primary'>Sina</Button>
    </Container>
    
  )
}
