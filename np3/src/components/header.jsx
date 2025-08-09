import { Link } from 'react-router-dom';

function PageHeader(){
    return (
        <div id="header">
            <div id="mainlogo">
                <Link to="/">
                    <div id="n3p">N3P</div>
                </Link>
                <div id="logocontent">
                    <Link to="/nik"><div className="logobutton">NIK</div></Link>
                    <a href="/projects"><div className="logobutton">PROJECTS</div></a>
                    <a href="/photos"><div className="logobutton">PHOTOS</div></a>
                    <a href="/posters"><div className="logobutton">POSTERS</div></a>
                </div>
            </div>
    
            <a href="nik.html"><div className="button">CONTACT ME</div></a>
        </div>
    )
}

export default PageHeader;