import { Nav, Container, Navbar } from "react-bootstrap"
import style from '../css/Heder.module.css'
import logo from "../assets/images/asad.PNG"

function Header() {
    return (
        <>
        
           <Navbar className = {`${style.menu} fixed-top`} expand="lg">   {/* position-fixed top-0 start-0 end-0 */}
                {/* <div className="container" data-aos="fade-down" data-aos-delay="500"> */}
                <Container data-aos="fade-down" data-aos-delay="500" >
                    <Navbar.Brand href="/" className="text-light mx-auto fs-3 name ">
                    <img src={logo} className={`me-4 rounded-pill  ${style.logo}`} height={50} alt="" />
                    Enamul's Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className={`${style.Nhover} ${style.tcolor}`} >Home</Nav.Link>
                            <Nav.Link href="#about" className={`${style.Nhover} ${style.tcolor}`} >About Me</Nav.Link>
                            <Nav.Link href="#projects" className={`${style.Nhover} ${style.tcolor}`} >Project</Nav.Link>
                            <Nav.Link href="#skills" className={`${style.Nhover} ${style.tcolor}`} >Skills</Nav.Link>
                            <Nav.Link href="#contactme" className={`${style.Nhover} ${style.tcolor}`} >Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header