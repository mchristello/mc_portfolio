// CSS
import './TechStack.css'
// Utils
import { Container } from "react-bootstrap";



export default function TechStack () {

    return (
        <Container as={"section"}>
            <h2 id="myTechStack"><u>These are the <span>techs</span> that I'm able to work with...</u></h2>
            <Container as={'article'} className="techContainer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60"/>
                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="60" height="60"/>
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="60" height="60"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="60" height="60"/>
                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="60" height="60"/> 
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60"/>
            </Container>
        </Container>
    )

}


