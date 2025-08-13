"use client"; // needed if you’re using Next.js app directory

import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useFormStatus } from "react-dom";
import { useState, useRef } from "react";
import style from "../css/ContactMe.module.css";
import "../css/style.css";

export default function ContactMe() {
    const resume = "https://drive.google.com/uc?export=download&id=1LmyQTD-Yk7-Y1e_xM04Q-8ik7RR5I0UA";

    const formRef = useRef(null);
    const [msg, setMsg] = useState("");

    const scriptURL = "https://script.google.com/macros/s/AKfycbxgoXpRPFCI2b1IJru4x1UDiTx8Xzg-O9YZ8atSnPEwWMNaWX0j_mgJcLXsqqx8Gzg4/exec";


    async function submitAction(formData) {
        setMsg("Sending...");
        try {
            await fetch(scriptURL, {
                method: "POST",
                body: formData,
            });
            setMsg("Message Sent Successfully");
            setTimeout(() => setMsg(""), 2000);
            formRef.current.reset();
        } catch (err) {
            setMsg("Error! Try again.");
        }
    }

    function ContactFormFields() {
        const { pending } = useFormStatus();
        return (
            <>
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
                <Button
                    disabled={pending}
                    type="submit"
                    variant={pending ? "success" : "outline-danger"}
                    size="lg"
                    className="w-100"
                >
                    {pending ? "Submitting..." : "Submit"}
                </Button>
            </>
        );
    }

    return (
        <Container>
            <Row>
                {/* Left Side */}
                <Col md={4}>
                    <h1
                        className="text-light mb-2 name"
                        id="contactme"
                        data-aos="fade-down"
                        data-aos-delay="500"
                    >
                        Contact Me
                    </h1>

                    <p
                        className="text-light mb-4"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        <i className="text-danger fa-solid fa-paper-plane me-3 fs-3"></i>
                        <a className="d-inline nav-link" href="mailto:ehaq14520@gmail.com">
                            ehaq14520@gmail.com
                        </a>
                    </p>

                    <p
                        className="text-light mb-4"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        <i className=" text-danger fa-solid fa-phone fs-3 me-3"></i>{" "}
                        8858097678
                    </p>

                    <Col
                        md
                        className="text-light mt-4"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <a
                            href="https://www.linkedin.com/in/enamul-haq-asf/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin fs-2 me-3 text-secondary"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100093057553781"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-facebook fs-2 me-3 text-secondary"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/asad_procrastinator?igsh=d2N3NXlocjRtN2wy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram fs-2 me-3 text-secondary"></i>
                        </a>
                        <a
                            href="https://x.com/Enamul_Asad?t=FMxgIBEQl0kordRPH_lgdg&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-x-twitter fs-2 text-secondary"></i>
                        </a>
                    </Col>

                    <Col md>
                        <a
                            href={resume}
                            download
                            className="btn btn-danger mt-5"
                            data-aos="fade-left"
                            data-aos-delay="500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </Col>
                </Col>

                {/* Right Side */}
                <Col md={8}>
                    {msg && (
                        <Alert
                            variant={msg.includes("Error") ? "danger" : "success"}
                            className="fw-bold"
                        >
                            {msg}
                        </Alert>
                    )}

                    <form
                        ref={formRef}
                        action={submitAction} // this is what makes useFormStatus work
                        name="submit-to-google-sheet"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        <ContactFormFields />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
