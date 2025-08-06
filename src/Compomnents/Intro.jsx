import { Container, Row, Col, Button } from "react-bootstrap"
import style from '../css/Intro.module.css'
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import asad from '../assets/images/asad2.png'

function Intro() {
const typedRef = useRef(null); // Ref for Typed.js

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Python Developer", "Web Developer", "Frontend Developer" , "dJango Fullstack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    return () => typed.destroy(); // Cleanup
  }, []);
const resume = "https://drive.google.com/file/d/1lH29QnhOWStYmrxI2C7rvWOJacdnVLOV/view?usp=sharing";
    return (
        <>
            <Container  className={style.first}>
                <Row className="align-items-center">
                    <Col className="text-light align-text-center " md={7} data-aos="fade-left" data-aos-delay="500">
                        <div className="fs-1">Hello , My name is <span className="fs-1 name">Enamul Haq</span></div>
                        <div className="fs-1">and I am passionate</div>
                        {/*  Element to contain animated typing */}
                        <div className={`fs-1 ${style.typewriter}`} ref={typedRef} style={{color:"rgb(143, 143, 226)"}}> </div>
                        <Button variant="outline-info"  href={resume} target="_blank" className="fw-bold mt-5" size="lg">Download Resume</Button>
                        <Button variant="outline-warning" href="https://github.com/enamul-asad" className="fw-bold mt-5 ms-4" size="lg">Visit Github</Button>
                    </Col>
                    <Col md={5}>
                        <div>
                            <img className="img-fluid" src={asad} alt=""/>
                        </div>
                    </Col>
                </Row>
            <hr className="border-0 line"/>
            </Container>
        </>
    )
}

export default Intro