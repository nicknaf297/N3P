function InfoCard({image, alt, title, subtitle, year}) {
    return (
        <div className="info-card" style={{height: '232.5px'}}>
            <img src={image} alt={alt}/>
            <div className="text-content">
                <div className="header_text" style={{fontSize: '24px'}}>{title}</div>
                <div className="body_text" style={{fontSize: '22px'}}>{subtitle}</div>
                <div className="body_text_italic" style={{fontSize: '20px'}}>{year}</div>
            </div>
        </div>
    );
}

export default InfoCard;