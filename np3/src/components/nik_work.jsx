import InfoCard from "./info_card"

function NikWork() {
    return(
    <section className="center_vertical_container" style={{gap: "48px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "60px"}}>WORK EXPERIENCE</h2>
            <div className="center_horizontal_container fadeAnimation" style={{gap: "32px"}}>
                <InfoCard
                    image="img/logos/greensheart_logo.jpg"
                    alt="GreenSHeart"
                    title="Graphic Designer & Full Stack Developer at GreenSHeart Sdn Bhd"
                    subtitle="2024-2025"
                />
                <InfoCard
                    image="img/logos/kumon.png"
                    alt="Kumon"
                    title="Tutor at Kumon"
                    subtitle="2022"
                />
            </div>
        </section>
    )
}

export default NikWork