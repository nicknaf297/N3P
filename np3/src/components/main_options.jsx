import { Link } from 'react-router-dom';

function MainOptions({ pageLink, title, subtitle, image }) {
    return (
        <Link to={pageLink}>
            <div
                className="mainoptions"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="optiontextbar">
                    <div className="titletextbar">{title}</div>
                    <div className="desctextbar">{subtitle}</div>
                </div>
            </div>
        </Link>
    );
}

export default MainOptions;
