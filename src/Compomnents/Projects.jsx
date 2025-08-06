import { Container, Row, Col, Button, Card } from "react-bootstrap"
import '../css/style.css'
import style from '../css/Project.module.css'
import OMHC from "../assets/images/chat.png"
import CRM from "../assets/images/crm.avif"
import news from "../assets/images/news.jpeg"
function Projects() {
    return (
        <>
            <Container>
                <Row>
                    <Col md id="projects">
                        <h1 className="text-light mb-5 text-center fw-bold name" data-aos="fade-down" data-aos-delay="500">Projects</h1>
                    </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-delay="500">
                    <Col md className="my-3">
                        <Card className={style.cardbg} >
                            <Card.Img variant="top" className="mx-auto mt-2" src={OMHC} style={{ width: "95%" }} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-light mt-3 mb-4">Online Mental Health Chatbot</Card.Title>
                                <Card.Text>
                                    The Online Mental Health Chatbot (MindBot) is an AI-driven web app that
                                    provides users with a safe and anonymous space to express their emotions. Using Natural
                                    Language Processing (NLP), it simulates empathetic conversations, detects emotional
                                    tone,
                                    and offers supportive responses or mental health tips.
                                    <p className="my-3 ">
                                        <b>Technologies Used : </b> </p><p>
                                        <Button variant="outline-danger" className="rounded-pill">HTML</Button>
                                        <Button variant="outline-warning" className="rounded-pill mx-2">CSS</Button>
                                        <Button variant="outline-primary" className="rounded-pill">JavaScript</Button>
                                        <Button variant="outline-info" className="rounded-pill mx-2">Bootstrap</Button>
                                        <Button variant="outline-success" className="my-2 rounded-pill">Python</Button>
                                        <Button variant="outline-info" className="my-2 rounded-pill mx-2">dJango</Button>
                                        <Button variant="outline-warning" className="my-2 rounded-pill">NLP Libraries</Button>
                                    </p>
                                    <Button variant="outline-danger" href="https://github.com/enamul-asad" className="mt-3">View Code</Button>
                                    {/* <Button variant="outline-danger" href="#" className="mt-3 float-end">Go Live</Button> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md className="my-3">
                        <Card className={style.cardbg} >
                            <Card.Img variant="top" className="mx-auto mt-2" src={CRM} style={{ width: "95%", height:"247px" }} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-light mt-3 mb-4">MARC LAB CRM System</Card.Title>
                                <Card.Text>
                                    This project is a Django-based Customer Relationship Management (CRM)
                                    System designed to streamline interactions between a company and its customers. It
                                    enables
                                    efficient handling of customer information, enquiries, feedback, and product-related
                                    data
                                    through dedicated admin and customer interfaces.
                                    <p className="my-3 ">
                                        <b>Technologies Used : </b> </p><p>
                                        <Button variant="outline-danger" className="rounded-pill">HTML</Button>
                                        <Button variant="outline-warning" className="rounded-pill mx-2">CSS</Button>
                                        <Button variant="outline-primary" className="rounded-pill">JavaScript</Button>
                                        <Button variant="outline-info" className="rounded-pill mx-2">Bootstrap</Button>
                                        <Button variant="outline-success" className="my-2 rounded-pill">Python</Button>
                                        <Button variant="outline-info" className="my-2 rounded-pill mx-2">dJango</Button>
                                    </p>
                                    <Button variant="outline-danger" href="https://github.com/enamul-asad" className="mt-3">View Code</Button>
                                    {/* <Button variant="outline-danger" href="#" className="mt-3 float-end">Go Live</Button> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md className="my-3">
                        <Card className={style.cardbg} >
                            <Card.Img variant="top" className="mx-auto mt-2" src={news} style={{ width: "95%", height: '247px'}} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-light mt-3 mb-4">NEWS Letter Web Page</Card.Title>
                                <Card.Text>
                                    NEWS APP is a simple, responsive web application that fetches and displays the latest news headlines in a clean, user-friendly interface. Users can browse trending news articles across various categories, ensuring they stay informed about current events from a central platform.
                                    <p className="my-3 ">
                                        <b>Technologies Used : </b> </p><p>
                                        <Button variant="outline-danger" className="rounded-pill">HTML</Button>
                                        <Button variant="outline-warning" className="rounded-pill mx-2">CSS</Button>
                                        <Button variant="outline-primary" className="rounded-pill">JavaScript</Button>
                                        <Button variant="outline-info" className="rounded-pill mx-2">Bootstrap</Button>
                                        <Button variant="outline-success" className="my-2 rounded-pill">Api's</Button>

                                    </p>
                                    <Button variant="outline-danger" href="https://github.com/enamul-asad" className="mt-3">View Code</Button>
                                    {/* <Button variant="outline-danger" href="#" className="mt-3 float-end">Go Live</Button> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                        <hr className="line border-0"/>
            </Container>

            
        </>
    )
}

export default Projects