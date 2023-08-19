// CSS
import './TechStack.css'
// Utils
import { Container } from "react-bootstrap";



export default function TechStack () {

    return (
        <Container as={"section"}>
            <h2 id="myTechStack" className='text-center'>These are the <span>techs</span> that I work with...</h2>
            <Container as={'article'} className="techContainer">
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="90" height="90" />
                    <span className="text-center">HTML</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="90" height="90" />
                    <span className="text-center">CSS</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="90" height="90" />
                    <span className="text-center">JavaScript</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="90" height="90" />
                    <span className="text-center">Typescript</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="90" height="90" />
                    <span className="text-center">ReactJs</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="90" height="90" />
                    <span className="text-center">ExpressJs</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="90" height="90" />
                    <span className="text-center">NodeJs</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="90" height="90" />
                    <span className="text-center">MongoDB</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="90" height="90"  />
                    <span className="text-center">Tailwind</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="90" height="90" />
                    <span className="text-center">Firebase</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="90" height="90" />
                    <span className="text-center">Postman</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="90" height="90" />
                    <span className="text-center">Bootstrap</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="90" height="90" />
                    <span className="text-center">SaaS</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="90" height="90" /> 
                    <span className='text-center'>Figma</span>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <img className='tech__img' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="90" height="90" />
                    <span className="text-center">Git</span>
                </div>
            </Container>
        </Container>
    )

}


