import { Row, Col, Container } from "react-bootstrap"

function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col md className="text-center mt-5 p-3 text-light">
                        <footer>
                            <small>© 2025 Portfolio. All rights reserved. Developed By<i> <b>ENAMUL HAQ </b></i></small>
                        </footer>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Footer