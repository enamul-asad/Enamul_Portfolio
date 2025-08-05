import AboutUs from "./Compomnents/AboutUs"
import ContactMe from "./Compomnents/ContactMe"
import Footer from "./Compomnents/Footer"
import Header from "./Compomnents/Header"
import Intro from "./Compomnents/Intro"
import Projects from "./Compomnents/Projects"
import Skills from "./Compomnents/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App(){

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);


  return(
    <>
    <Header/>
    <Intro/>
    <AboutUs/>
    <Projects/>
    <Skills/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App