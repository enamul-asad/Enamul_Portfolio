import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import '../css/style.css';
import style from '../css/Skills.module.css'


function Skills() {
    return (
        <>
            <Container>
                <Row>
                    <Col md id="skills">
                        <h1 className="text-light mb-5 text-center fw-bold name" data-aos="fade-down" data-aos-delay="500">Skills</h1>
                    </Col>
                </Row>
                <Container data-aos="fade-left" data-aos-delay="500">
                    <Row >
                        <Col md className={`mt-3 ${style.cardhover}`} >
                            <Card className={` border-info mb-3 ${style.cardbg}`} style={{ paddingBottom: "85px" }}>
                                <Card.Body>
                                    <Card.Title className="text-center m-3 text-light pb-4 border-bottom border-info fs-4">
                                        <i class="fas fa-code  fs-4 me-3"></i>
                                        Languages
                                    </Card.Title>
                                    <Container className="pt-4">
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Proficient</Tooltip>}
                                            >
                                                <Card.Text className={`rounded-pill p-2 ms-2  border border-info my-2 col-md-5 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                    <img src="../src/assets/images/python.png" alt="python" height="27px" width="28px" />
                                                    <span className="ms-2">Python</span>
                                                </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Good understanding  </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/js.png" alt="JavaScript" height="27px" width="28px" />
                                                <span className="ms-2">JavaScript</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className=" mb-3 ms-2">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Good understanding  </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info my-2 col-md-3 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/c.png" alt="c" height="27px" width="28px" />
                                                <span className="ms-2">C</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Explored </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-4 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/java.png" alt="Java" height="27px" width="28px" />
                                                <span className="ms-2">Java</span>
                                            </Card.Text></OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Familiar  </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-4 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/csharp.png" alt="C#" height="27px" width="28px" />
                                                <span className="ms-2">C#</span>
                                            </Card.Text></OverlayTrigger>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md className={`mt-3 ${style.cardhover}`}>
                            <Card className={` border-info mb-3 ${style.cardbg}`} style={{ paddingBottom: "42px" }}>
                                <Card.Body>
                                    <Card.Title className="text-center m-3 text-light pb-4 border-bottom border-info fs-4">
                                        <i class="fas fa-cubes me-3"></i>
                                        Frameworks & Libraries
                                    </Card.Title>
                                    <Container className="pt-4">
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Capable of Using </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2 border border-info my-2 col-md-5 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/reactjs.png" alt="React JS" height="27px" width="28px" />
                                                <span className="ms-2">React JS</span>
                                            </Card.Text></OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/django.png" alt="django" height="27px" width="28px" />
                                                <span className="ms-2">dJango</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="left"
                                                overlay={<Tooltip>Good Understanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info my-2 col-md-6 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/tailwindcss.png" alt="tailwindcss" height="27px" width="28px" />
                                                <span className="ms-2">Tailwind CSS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="right"
                                                overlay={<Tooltip>Currently Learning </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-5 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/flask.png" alt="Flask" height="27px" width="28px" />
                                                <span className="ms-2">Flask</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info justify-content-lg-center col-md-5 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/boots.png" alt="Bootstrap" height="27px" width="28px" />
                                                <span className="ms-2">Bootstrap</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md className={`mt-3 ${style.cardhover}`}>
                            <Card className={` border-info mb-3 ${style.cardbg}`} style={{ paddingBottom: "85px" }}>
                                <Card.Body>
                                    <Card.Title className="text-center m-3 text-light pb-4 border-bottom border-info fs-4">
                                        <i class="fas fa-tools me-3"></i>
                                        Tools
                                    </Card.Title>
                                    <Container className="pt-4">
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Explored </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info my-2 col-md-5 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/github.png" alt="Git Hub" height="27px" width="28px" />
                                                <span className="ms-1">Git Hub</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/vscode.png" alt="VS Code" height="27px" width="28px" />
                                                <span className="ms-1">VS Code</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className=" mb-3 ms-2">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Familliar </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-4 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/git.png" alt="Git" height="27px" width="28px" />
                                                <span className="ms-1">Git</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-5 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/intelliJ.png" alt="IntelliJ IDEA" height="27px" width="28px" />
                                                <span className="ms-1">IntelliJ IDEA</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                    <Row>
                        <Col md={4} className={`mt-3 col-md-4 mx-auto ${style.cardhover}`}>
                            <Card className={` border-info mb-3 ${style.cardbg}`} style={{ paddingBottom: "42px" }}>
                                <Card.Body>
                                    <Card.Title className="text-center m-3 text-light pb-4 border-bottom border-info fs-4">
                                        <i class="fas fa-laptop-code  fs-4 me-3"></i>
                                        Frontend
                                    </Card.Title>
                                    <Container className="pt-4">
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info my-2 col-md-5 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/html.png" alt="HTML" height="27px" width="28px" />
                                                <span className="ms-2">HTML</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Good Understanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/js.png" alt="JavaScript" height="27px" width="28px" />
                                                <span className="ms-2">JavaScript</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="  ms-2">
                                            <OverlayTrigger
                                                placement="left"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info my-2 col-md-5 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/boots.png" alt="Bootstrap" height="27px" width="28px" />
                                                <span className="ms-2">Bootstrap</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="right"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-4 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/css.png" alt="CSS" height="27px" width="28px" />
                                                <span className="ms-2">CSS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="ms-2"><OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Good Understanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/tailwindcss.png" alt="Tailwind CSS" height="27px" width="28px" />
                                                <span className="ms-2">Tailwind CSS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Good Unerstanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-5 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/reactjs.png" alt="React JS" height="27px" width="28px" />
                                                <span className="ms-2">React JS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={4} className={`mt-3 mx-auto ${style.cardhover}`}>
                            <Card className={` border-info mb-3 ${style.cardbg}`} style={{ paddingBottom: "85px" }}>
                                <Card.Body>
                                    <Card.Title className="text-center m-3 text-light pb-4 border-bottom border-info fs-4">
                                        <i class="fas fa-head-side-virus me-3"></i>
                                        Soft Skills
                                    </Card.Title>
                                    <Container className="pt-4">
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Do My Best </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2 border border-info my-2 col-md-5 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/time.png" alt="Time Management" height="27px" width="28px" />
                                                <span style={{ fontSize: "12px" }}>Time Management</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Do My Best </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/problemSolving.png" alt="Problem Solving" height="27px" width="28px" />
                                                <span style={{ fontSize: "14px" }}>Problem Solving</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="ms-2 mb-3">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Do My Best </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info my-2 col-md-6 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/communication.png" alt="Communication" height="27px" width="28px" />
                                                <span style={{ fontSize: "14px" }}>Communication</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Do My Best </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-5 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src="../src/assets/images/teamwork.png" alt="teamwork" height="27px" width="28px" />
                                                <span style={{ fontSize: "14px" }} className="ms-2">Team Work</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>

                                    </Container>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
                <hr className="line border-0" />
            </Container>
        </>
    )
}

export default Skills