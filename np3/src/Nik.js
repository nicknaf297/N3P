import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import NikProfile from './components/nik_profile';
import NikAbout from './components/nik_about';
import NikSkills from './components/nik_skils';
import NikWork from './components/nik_work';
import NikEducation from './components/nik_education';
import NikLeader from './components/nik_leader';
import NikCoco from './components/nik_coco';
import IconLink from './components/icon_link';

function NikPage() {
    return (
        <div className="container" style={{gap: "84px"}}>
            <NikProfile></NikProfile>

            <NikAbout></NikAbout>

            <NikEducation></NikEducation>

            <NikSkills></NikSkills>
        
            <NikWork></NikWork>
    
            <NikLeader></NikLeader>

            <NikCoco></NikCoco>
    
            <section className="center_vertical_container fadeAnimation" style={{gap: "16px"}}>
                <p className="body_text_bold " style={{fontSize: "32px"}}>DOWNLOAD MY RESUME</p>
                <IconLink
                        icon={<FontAwesomeIcon icon={faDownload} size="4x" />}
                        link="https://www.linkedin.com/in/nik-ameer-faiq-nik-muhd-aslan-3b7b912ab/"> 
                    </IconLink>
                <section className="center_vertical_container" style={{gap: "48px"}}>
                <div className="center_horizontal_container" style={{height: "200px"}}>
                </div>
            </section>
            </section>
        </div>
    );
}

export default NikPage;