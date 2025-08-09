import InfoCard from "./info_card"

function NikEducation() {
    return(
        <section className="center_vertical_container" style={{gap: "48px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "60px"}}>EDUCATION</h2>
            <div className="center_horizontal_container fadeAnimation" style={{gap: "32px"}}>
                <InfoCard
                    image="img/logos/mmu.jpg"
                    alt="MMU Logo"
                    title="Bachelor of Computer Science (Hons.) (Cybersecurity)"
                    subtitle="CGPA: 4.00"
                    year="2022-2025"
                />
                <InfoCard
                    image="img/logos/asasi.png"
                    alt="ASASIpintar Logo"
                    title="ASASIpintar Programme"
                    subtitle="CGPA: 4.00"
                    year="2022-2025"
                />
                <InfoCard
                    image="img/logos/permata.jpg"
                    alt="Pusat PERMATApintar Logo"
                    title="Sijil Pelajaran Malaysia & High School Diploma"
                    subtitle="9A (7A+, 2A) & CGPA: 3.82"
                    year="2022-2025"
                />
            </div>
        </section>
    )
}

export default NikEducation