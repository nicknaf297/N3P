import PopOutCard from "./pop_out_card";

function NikCoco24() {
    return(
        <div className="center_vertical_container" style={{gap: "20px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "25px"}}>2024</h2>
            <div className="center_horizontal_container fadeAnimation" style={{gap: "32px"}}>
                        <PopOutCard
                titleName="CodeNection 2024"
                subtitle="Coding Competition | Committee"
                popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                A coding competition for university students organized by MMU students.
                            </li>
                            <li>
                                I was part of the multimedia committee and my main tasks include designing posters, certificates and being the photographer for the event day.
                            </li>
                        </ul>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/code1.jpg" style={{ width: '40%' }} alt="codenection"/>
                            <img src="/img/code2.jpg" style={{ width: '40%' }} alt="codenection"/>
                        </div>
                    </div>
                }
            />
            <PopOutCard
                titleName="Kechara Soup Kitchen"
                subtitle="Volunteering Programme | Participant"
                popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                A volunteering programme organized by Kechara Soup Kitchen Society to help those in need.
                            </li>
                            <li>
                                Collecting surplus food from multiple stores such as KFC and AEON in Cheras, then delivering them to Cheshire Home, a home for old and disabled individuals.
                            </li>
                        </ul>
                    </div>
                }
            />
            <PopOutCard
                titleName="Sekolah@MMU Jubli Emas Darul Iman"
                subtitle="CSR Programme | Committee"
                popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                A 7 day programme across Terengganu involving high school students, organized by MMU students.
                            </li>
                            <li>
                                Part of the Multimedia Committee
                                <ul className="sub-list">
                                    <li>Taught the students about the basics of Canva</li>
                                    <li>Set up the school labs (laptops, WiFi, PCs)</li>
                                    <li>Evaluated the posters and videos created by the students as part of the final project</li>
                                </ul>
                            </li>
                            <li>
                                We also did many meaningful activities with the students such as Explorace, sharing sessions, and many more.
                            </li>
                        </ul>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/jubli1.jpg" style={{ width: '40%' }} alt="jubli"/>
                            <img src="/img/jubli2.jpg" style={{ width: '40%' }} alt="jubli"/>
                        </div>
                    </div>
                }
            />
            </div>
        </div>
    )
}

export default NikCoco24