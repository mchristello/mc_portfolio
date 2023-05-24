// CSS
import './Footer.css'
// Utils
import { Container } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { IconContext } from 'react-icons';

export default function Footer () {


    return (
        <Container className='footerContainer'>
            <p className="footer text-center">Developed by Matias Christello</p>
            <IconContext.Provider value={{ size: "2em"}}>
                <section className='footer_icons'>
                    <a className='m-3' href="https://github.com/mchristello" target='_blank'><BsGithub /></a>
                    <a className='m-3' href="https://www.linkedin.com/in/matias-christello/" target='_blank'><BsLinkedin /></a>
                    <a className='m-3' href="https://api.whatsapp.com/send?phone=542615682101" target='_blank'><BsWhatsapp /></a>
                </section>
            </IconContext.Provider>
        </Container>
    )
}
