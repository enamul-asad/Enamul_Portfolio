import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../css/style.css";
import style from "../css/Skills.module.css";

import python from "../assets/images/python.png";
import jS from "../assets/images/js.png";
import c from "../assets/images/c.png";
import java from "../assets/images/java.png";
import csharp from "../assets/images/csharp.png";
import boots from "../assets/images/boots.png";
import reactjs from "../assets/images/reactjs.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import flask from "../assets/images/js.png";
import dJango from "../assets/images/django.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import vscode from "../assets/images/vscode.png";
import intelliJ from "../assets/images/intelliJ.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import timeM from "../assets/images/time.png";
import communication from "../assets/images/communication.png";
import sql from "../assets/images/sql.png";
import teamwork from "../assets/images/teamwork.PNG";
import problemSolving from "../assets/images/problemSolving.png";


function SkillItem({
    icon,
    alt,
    name,
    tooltip,
}) {
    return (
        <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{tooltip}</Tooltip>}
        >
            <div className={style.skillWrapper}>
                <div className={style.skillbtn}>
                    <img
                        src={icon}
                        alt={alt}
                        className={style.skillIcon}
                    />

                    <span>{name}</span>
                </div>
            </div>
        </OverlayTrigger>
    );
}


function SkillCard({
    icon,
    title,
    children,
    className = "",
}) {
    return (
        <Card
            className={`${style.cardbg} ${style.skillCard} border-info h-100 ${className}`}
        >
            <Card.Body className="d-flex flex-column">

                <Card.Title
                    className={`${style.cardTitle} text-center text-light border-bottom border-info`}
                >
                    <i className={`${icon} me-3`}></i>
                    {title}
                </Card.Title>

                <div className={style.skillsContainer}>
                    {children}
                </div>

            </Card.Body>
        </Card>
    );
}


function Skills() {
    return (
        <section id="skills">
            <Container
                fluid="lg"
                className="py-4 py-md-5"
            >

                {/* Heading */}
                <Row>
                    <Col xs={12}>
                        <h1
                            className="text-light text-center fw-bold name mb-4 mb-md-5"
                            data-aos="fade-down"
                            data-aos-delay="500"
                        >
                            Skills
                        </h1>
                    </Col>
                </Row>


                {/* Main Skill Cards */}
                <Row
                    className="g-3 g-md-4"
                    data-aos="fade-left"
                    data-aos-delay="500"
                >

                    {/* Languages */}
                    <Col xs={12} md={6} lg={4}>
                        <SkillCard
                            icon="fas fa-code"
                            title="Languages"
                        >

                            <SkillItem
                                icon={python}
                                alt="Python"
                                name="Python"
                                tooltip="Proficient"
                            />

                            <SkillItem
                                icon={jS}
                                alt="JavaScript"
                                name="JavaScript"
                                tooltip="Good understanding"
                            />

                            <SkillItem
                                icon={c}
                                alt="C"
                                name="C"
                                tooltip="Good understanding"
                            />

                            <SkillItem
                                icon={java}
                                alt="Java"
                                name="Java"
                                tooltip="Explored"
                            />

                            <SkillItem
                                icon={csharp}
                                alt="C#"
                                name="C#"
                                tooltip="Familiar"
                            />

                            <SkillItem
                                icon={sql}
                                alt="SQL"
                                name="SQL"
                                tooltip="Explored"
                            />

                        </SkillCard>
                    </Col>


                    {/* Frameworks */}
                    <Col xs={12} md={6} lg={4}>
                        <SkillCard
                            icon="fas fa-cubes"
                            title="Frameworks & Libraries"
                        >

                            <SkillItem
                                icon={reactjs}
                                alt="React JS"
                                name="React JS"
                                tooltip="Capable of Using"
                            />

                            <SkillItem
                                icon={dJango}
                                alt="Django"
                                name="Django"
                                tooltip="Proficient"
                            />

                            <SkillItem
                                icon={tailwindcss}
                                alt="Tailwind CSS"
                                name="Tailwind CSS"
                                tooltip="Good Understanding"
                            />

                            <SkillItem
                                icon={flask}
                                alt="Flask"
                                name="Flask"
                                tooltip="Currently Learning"
                            />

                            <SkillItem
                                icon={boots}
                                alt="Bootstrap"
                                name="Bootstrap"
                                tooltip="Proficient"
                            />

                        </SkillCard>
                    </Col>


                    {/* Tools */}
                    <Col xs={12} md={6} lg={4}>
                        <SkillCard
                            icon="fas fa-tools"
                            title="Tools"
                        >

                            <SkillItem
                                icon={github}
                                alt="GitHub"
                                name="GitHub"
                                tooltip="Explored"
                            />

                            <SkillItem
                                icon={vscode}
                                alt="VS Code"
                                name="VS Code"
                                tooltip="Proficient"
                            />

                            <SkillItem
                                icon={git}
                                alt="Git"
                                name="Git"
                                tooltip="Familiar"
                            />

                            <SkillItem
                                icon={intelliJ}
                                alt="IntelliJ IDEA"
                                name="IntelliJ IDEA"
                                tooltip="Proficient"
                            />

                        </SkillCard>
                    </Col>


                    {/* Frontend */}
                    <Col xs={12} md={6} lg={4} className="mx-lg-auto">
                        <SkillCard
                            icon="fas fa-laptop-code"
                            title="Frontend"
                        >

                            <SkillItem
                                icon={html}
                                alt="HTML"
                                name="HTML"
                                tooltip="Proficient"
                            />

                            <SkillItem
                                icon={jS}
                                alt="JavaScript"
                                name="JavaScript"
                                tooltip="Good Understanding"
                            />

                            <SkillItem
                                icon={boots}
                                alt="Bootstrap"
                                name="Bootstrap"
                                tooltip="Proficient"
                            />

                            <SkillItem
                                icon={css}
                                alt="CSS"
                                name="CSS"
                                tooltip="Proficient"
                            />

                            <SkillItem
                                icon={tailwindcss}
                                alt="Tailwind CSS"
                                name="Tailwind CSS"
                                tooltip="Good Understanding"
                            />

                            <SkillItem
                                icon={reactjs}
                                alt="React JS"
                                name="React JS"
                                tooltip="Good Understanding"
                            />

                        </SkillCard>
                    </Col>


                    {/* Soft Skills */}
                    <Col xs={12} md={6} lg={4} className="mx-lg-auto">
                        <SkillCard
                            icon="fas fa-head-side-virus"
                            title="Soft Skills"
                        >

                            <SkillItem
                                icon={timeM}
                                alt="Time Management"
                                name="Time Management"
                                tooltip="Do My Best"
                            />

                            <SkillItem
                                icon={problemSolving}
                                alt="Problem Solving"
                                name="Problem Solving"
                                tooltip="Do My Best"
                            />

                            <SkillItem
                                icon={communication}
                                alt="Communication"
                                name="Communication"
                                tooltip="Do My Best"
                            />

                            <SkillItem
                                icon={teamwork}
                                alt="Team Work"
                                name="Team Work"
                                tooltip="Do My Best"
                            />

                        </SkillCard>
                    </Col>

                </Row>


                <hr className="line border-0 mt-4 mt-md-5" />

            </Container>
        </section>
    );
}

export default Skills;
