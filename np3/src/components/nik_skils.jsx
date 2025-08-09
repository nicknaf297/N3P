import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera, faFilm } from '@fortawesome/free-solid-svg-icons';

function NikSkills() {
    return(
        <section className="center_vertical_container" style={{gap: "48px"}}>
                <h2 className="header_text fadeAnimation" style={{fontSize: "60px"}}>SKILLS</h2>
                <div className="center_vertical_container" style={{gap: "32px"}}>
                    <p className="body_text_bold fadeAnimation" style={{fontSize: "32px"}}>DEVELOPER</p>
                    <div className="logos fadeAnimation">
                        <img src="img/logos/cplus.png" alt="cplusplus"/>
                        <img src="img/logos/html.png" alt="html"/>
                        <img src="img/logos/css.png" alt="css"/>
                        <img src="img/logos/react.png" alt="react"/>
                        <img src="img/logos/flutter.png" alt="flutter"/>
                        <img src="img/logos/java.png" alt="java"/>
                        <img src="img/logos/python.png" alt="python"/>
                        <img src="img/logos/django.png" alt="django"/>
                        <img src="img/logos/cisco.png" alt="cisco"/>
                        <img src="img/logos/linux.png" alt="linux"/>
                    </div>
                    <p className="body_text_bold fadeAnimation" style={{fontSize: "32px"}}>DESIGN</p>
                    <div className="logos fadeAnimation">
                        <img src="img/logos/figma.png" alt="figma"/>
                        <img src="img/logos/photoshop.png" alt="photoshop"/>
                        <img src="img/logos/lightroom.png" alt="lightroom"/>
                    </div>
                    <p className="body_text_bold fadeAnimation" style={{fontSize: "32px"}}>PERSONAL INTEREST</p>
                    <div className="logos fadeAnimation">
                        <div className="center_vertical_container">
                            <FontAwesomeIcon icon={faCamera} size="4x"/>
                            <p className="body_text" style={{fontSize: "24px"}}>Photography</p>
                        </div>
                        <div className="center_vertical_container">
                            <FontAwesomeIcon icon={faFilm} size="4x"/>
                            <p className="body_text" style={{fontSize: "24px"}}>Video Editing</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default NikSkills