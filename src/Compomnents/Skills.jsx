import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import '../css/style.css';
import style from '../css/Skills.module.css'
import python from '../assets/images/python.png'
import jS from "../assets/images/js.png"
import c from "../assets/images/c.png"
import java from "../assets/images/java.png"
import csharp from "../assets/images/csharp.png"
import boots from "../assets/images/boots.png"
import reactjs from "../assets/images/reactjs.png"
import tailwindcss from "../assets/images/tailwindcss.png"
import flask from "../assets/images/js.png"
import dJango from "../assets/images/django.png"
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import vscode from "../assets/images/vscode.png"
import intelliJ from "../assets/images/intelliJ.png"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import timeM from "../assets/images/time.png"
import communication from "../assets/images/communication.png"
import sql from "../assets/images/sql.png"
import teamwork from "../assets/images/teamwork.PNG"
import problemSolving from "../assets/images/problemSolving.png"

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
                            <Card className={` border-info mb-3 ${style.cardbg}`} style={{ paddingBottom: "42px" }}>
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
                                                    <img src={python} alt="python" height="27px" width="28px" />
                                                    <span className="ms-2">Python</span>
                                                </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Good understanding  </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={jS} alt="JavaScript" height="27px" width="28px" />
                                                <span className="ms-2">JavaScript</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="ms-2">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Good understanding  </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info my-2 col-md-3 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={c} alt="c" height="27px" width="28px" />
                                                <span className="ms-2">C</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Explored </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-4 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={java} alt="Java" height="27px" width="28px" />
                                                <span className="ms-2">Java</span>
                                            </Card.Text></OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Familiar  </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-4 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={csharp} alt="C#" height="27px" width="28px" />
                                                <span className="ms-2">C#</span>
                                            </Card.Text></OverlayTrigger>
                                        </Row>
                                        <Row className=" ms-2">
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Explored </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-4 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={sql} alt="sql" height="27px" width="28px" />
                                                <span className="ms-2">SQL</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            
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
                                                <img src={reactjs} alt="React JS" height="27px" width="28px" />
                                                <span className="ms-2">React JS</span>
                                            </Card.Text></OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={dJango} alt="django" height="27px" width="28px" />
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
                                                <img src={tailwindcss} alt="tailwindcss" height="27px" width="28px" />
                                                <span className="ms-2">Tailwind CSS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="right"
                                                overlay={<Tooltip>Currently Learning </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-5 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={flask} alt="Flask" height="27px" width="28px" />
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
                                                <img src={boots} alt="Bootstrap" height="27px" width="28px" />
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
                                                <img src={github} alt="Git Hub" height="27px" width="28px" />
                                                <span className="ms-1">Git Hub</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={vscode} alt="VS Code" height="27px" width="28px" />
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
                                                <img src={git} alt="Git" height="27px" width="28px" />
                                                <span className="ms-1">Git</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-5 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={intelliJ} alt="IntelliJ IDEA" height="27px" width="28px" />
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
                                                <img src={html} alt="HTML" height="27px" width="28px" />
                                                <span className="ms-2">HTML</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Good Understanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={jS} alt="JavaScript" height="27px" width="28px" />
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
                                                <img src={boots} alt="Bootstrap" height="27px" width="28px" />
                                                <span className="ms-2">Bootstrap</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="right"
                                                overlay={<Tooltip>Proficient </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-4 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={css} alt="CSS" height="27px" width="28px" />
                                                <span className="ms-2">CSS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                        </Row>
                                        <Row className="ms-2"><OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Good Understanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={tailwindcss} alt="Tailwind CSS" height="27px" width="28px" />
                                                <span className="ms-2">Tailwind CSS</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Good Unerstanding </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-1  border border-info col-md-5 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={reactjs} alt="React JS" height="27px" width="28px" />
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
                                                <img src={timeM} alt="Time Management" height="27px" width="28px" />
                                                <span style={{ fontSize: "12px" }}>Time Management</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>Do My Best </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 ms-2  border border-info col-md-6 my-2 text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={problemSolving} alt="Problem Solving" height="27px" width="28px" />
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
                                                <img src={communication} alt="Communication" height="27px" width="28px" />
                                                <span style={{ fontSize: "14px" }}>Communication</span>
                                            </Card.Text>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip>Do My Best </Tooltip>}
                                            >
                                            <Card.Text className={`rounded-pill p-2 border border-info col-md-5 my-2 m-1  text-info ${style.Sheight} ${style.skillbtn}`}>
                                                <img src={teamwork} alt="teamwork" height="27px" width="28px" />
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
import js from "@eslint/js";

export default Skills