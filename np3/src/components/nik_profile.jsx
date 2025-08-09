import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import IconLink from './icon_link';
import { motion } from 'framer-motion';

function NikProfile() {
    return(
        <motion.div className="center_horizontal_container" 
        style={{gap: "84px", margin: "205px"}}
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ type: "spring"}}>
            <div className="profile-img">
                <img src="img/profile_pic.jpg" alt="Profile"/>
            </div>
            <div className="profile-info">
                <h1 className="header_text" style={{fontSize: "96px"}}>NIK AMEER FAIQ</h1>
                <p className="body_text" style={{fontSize: "40px"}}>Computer Science Student</p>
                <div className="icons">
                    <IconLink
                        icon={<FontAwesomeIcon icon={faEnvelope} size="2x" />}
                        link="mailto:nicknaf297@gmail.com"> 
                    </IconLink>
                    <IconLink
                        icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
                        link="https://www.linkedin.com/in/nik-ameer-faiq-nik-muhd-aslan-3b7b912ab/"> 
                    </IconLink>
                    <IconLink
                        icon={<FontAwesomeIcon icon={faInstagram} size="2x" />}
                        link="https://www.instagram.com/nik.amir__/"> 
                    </IconLink>
                    <IconLink
                        icon={<FontAwesomeIcon icon={faPhone} size="2x" />}
                        link="tel:+60166672907" > 
                    </IconLink>
                </div>
            </div>  
        </motion.div>
    )
}

export default NikProfile