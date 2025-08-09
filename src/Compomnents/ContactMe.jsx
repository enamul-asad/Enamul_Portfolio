import { Container, Row, Col, Button,Alert } from "react-bootstrap"
import { useState, useRef } from "react";
import style from '../css/ContactMe.module.css'
import '../css/style.css'


function ContactMe() {

    const resume = "https://drive.google.com/file/d/1LmyQTD-Yk7-Y1e_xM04Q-8ik7RR5I0UA/view?usp=sharing";



    const formRef = useRef(null);
    const [msg, setMsg] = useState("");

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxgoXpRPFCI2b1IJru4x1UDiTx8Xzg-O9YZ8atSnPEwWMNaWX0j_mgJcLXsqqx8Gzg4/exec";

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg("Sending...");

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(formRef.current),
        })
            .then((response) => {
                setMsg("Message Sent Successfully");
                setTimeout(() => setMsg(""), 2000);
                formRef.current.reset();
            })
            .catch((error) => {
                setMsg("Error! Try again.");
                console.error("Error!", error.message);
            });
    };


    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <h1 className="text-light mb-2 name" id="contactme" data-aos="fade-down" data-aos-delay="500" >Contact Me</h1>
                        <p className="text-light mb-4 " data-aos="fade-left" data-aos-delay="500"><i className="text-danger fa-solid fa-paper-plane me-3 fs-3"></i>
                            <a className="d-inline nav-link" href="mailto:ehaq14520@gmail.com">ehaq14520@gmail.com</a>
                        </p>
                        <p className="text-light mb-4" data-aos="fade-right" data-aos-delay="500">
                            <i className=" text-danger fa-solid fa-phone fs-3 me-3"></i> 8858097678
                        </p>
                        <Col md className="text-light mt-4" data-aos="fade-up" data-aos-delay="500">
                            <a href="https://www.linkedin.com/in/enamul-haq-asf/" target="_blank">
                                <i className="fa-brands fa-linkedin fs-2 me-3 text-secondary"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100093057553781" target="_blank">
                                <i className="fa-brands fa-facebook fs-2 me-3 text-secondary"></i></a>
                            <a href="https://www.instagram.com/asad_procrastinator?igsh=d2N3NXlocjRtN2wy" target="_blank">
                                <i className="fa-brands fa-instagram fs-2 me-3 text-secondary"></i>
                            </a>
                            <a href="https://x.com/Enamul_Asad?t=FMxgIBEQl0kordRPH_lgdg&s=09" target="_blank">
                                <i className="fa-brands fa-x-twitter fs-2 text-secondary"></i>
                            </a>
                        </Col >
                        < Col md>
                            <a href={resume} download class="btn btn-danger mt-5" data-aos="fade-left"
                                data-aos-delay="500" target="_blank">Download CV</a>
                        </Col>
                    </Col>
                    <Col md={8}>
                        {/* <div id="msg" className="mt-3 text-success fw-bold"> {msg}</div> */}
                        <div>{msg?(<Alert variant="danger" className=" fw-bold">{msg}</Alert>):''}</div>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            name="submit-to-google-sheet"
                            data-aos="fade-left"
                            data-aos-delay="500"
                        >
                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                required
                                className={`form-control text-light mb-3 ${style.input} ${style.customInput}`}
                            />
                            <input
                                type="email"
                                name="Email"
                                placeholder="Your Email"
                                required
                                className={`form-control text-light mb-3 ${style.input} ${style.customInput}`}
                            />
                            <textarea
                                name="Message"
                                placeholder="Your Message"
                                className={`form-control text-light mb-3 ${style.textarea} ${style.customInput}`}
                            ></textarea>
                            <Button type="submit" variant="outline-danger" size="lg" className="w-100">
                                Submit
                            </Button>

                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default ContactMe