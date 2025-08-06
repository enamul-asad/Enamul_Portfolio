import { Row, Col, Container } from "react-bootstrap"
import style from '../css/About.module.css'
import { useState } from "react";
import display from '../assets/images/one.webp'

function AboutUs() {
    const [activeTab, setActiveTab] = useState('Education');
    return (
        <>
            <Container>
                <Row>
                    <Col id="about">
                        <h1 className="text-light text-center mb-2 name" data-aos="fade-right" data-aos-delay="500">About Me</h1>

                    </Col>
                </Row>
                <Row>
                    <Col md={5} data-aos="fade-right" data-aos-delay="500">
                        <Row>
                            <Col md={11}>
                                <img src={display} alt="" className="img-fluid" />
                            </Col>
                        </Row>

                    </Col>
                    <Col md={7} className="text-start text-light">
                        <h1 className="my-3 fw-bold fs-1" style={{ color: "rgb(143, 143, 226)" }} data-aos="fade-left" data-aos-delay="500"> Here's A Little Bit About Myself</h1>
                        <section data-aos="fade-right" data-aos-delay="500">
                            <p>
                                <span className="fw-bold">As a fresher</span>, I believe in putting in consistent hard work and
                                learning with every step I
                                take. I’m passionate about growing both personally and professionally. My exposure to
                                different cultures and languages has helped me develop a broader mindset, which I aim to
                                reflect in everything I do. I’m excited to bring my energy, curiosity, and fresh perspective
                                to create value and deliver results clients can truly appreciate.
                            </p>
                        </section>
                        <Row className="tab-titles" data-aos="fade-left" data-aos-delay="500">
                            <Col md={2} className={`fw-bold ${style.tabLinks} ${activeTab === 'Education' ? style.activeLink : ''}`}
                                onClick={() => setActiveTab('Education')}>Education</Col>
                            <Col md={2} className={`fw-bold  ${style.tabLinks} ${activeTab === 'Experience' ? style.activeLink : ''}`}
                                onClick={() => setActiveTab('Experience')}>Exprience</Col>
                        </Row>
                        <Row data-aos="fade-right" data-aos-delay="500">
                            {activeTab === 'Education' && (
                                <Row>
                                    <Col md className={` mt-4 text-start ${style.tabContents} ${style.activeTab}`}>
                                        <ul>
                                            <li>
                                                <span>2015-17</span><br />
                                                <strong>High School (9th–10th)</strong> from UP Board
                                            </li>
                                            <li>
                                                <span>2017-19</span><br />
                                                <strong>Intermediate (11th–12th)</strong> from UP Board
                                            </li>
                                            <li>
                                                <span>2019-22</span><br />
                                               <strong> B.Sc (Mathematics)</strong> from Veer Bahadur Singh Purvanchal University Jaunpur
                                            </li>
                                            <li>
                                                <span>2023-25</span><br />
                                                <strong>M.C.A</strong> from Integral University Lucknow
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            )}

                            {activeTab === 'Experience' && (
                                <Row>
                                    <Col md className={`mt-4 text-start ${style.tabContents} ${style.activeTab}`}>
                                        <ul>
                                            <li>
                                                <span>2024</span><br />
                                                Internship at SoftPro India
                                            </li>
                                        </ul>
                                    </Col >
                                </Row>
                            )}
                        </Row>
                    </Col>
                </Row>\
                <hr className="border-0 line" />
            </Container>
        </>
    )
}

export default AboutUs