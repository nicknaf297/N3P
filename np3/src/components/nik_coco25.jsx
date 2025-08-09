import PopOutCard from "./pop_out_card";

function NikCoco25() {
    return(
        <div className="center_vertical_container" style={{gap: "20px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "25px"}}>2025</h2>
            <div className="center_horizontal_container fadeAnimation" style={{gap: "32px"}}>
            <PopOutCard
                titleName="Sekolah@MMU Perdana Negeri Sembilan 2025"
                subtitle="CSR Programme | Assistant Director"popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                A 7 day CSR programme across Kuala Pilah, Negeri Sembilan involving 14 high schools and 500 students, organized by MMU students and PPD.
                            </li>
                            <li>
                                I was the Assistant Director, my responsibilities include:
                                <ul className="sub-list">
                                    <li>Oversee the Multimedia Division for designing media collaterals and teaching modules.</li>
                                    <li>Oversee the Technical, Logistic and Asset Division for assets, </li>
                                    <li>Oversee the Communications and Media Division, responsible for ceremony planning and closing gimmick.</li>
                                    <li>In charge of arranging the logistic plan for buses for the movements of students.</li>
                                    <li>Lead and manage my team on the closing school. ensuring activities are well executed.</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/n93.jpg" style={{ width: '35%' }} alt="perdanaN9"/>
                            <img src="/img/n94.jpg" style={{ width: '35%' }} alt="perdanaN9"/>
                        </div>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/n92.jpg" style={{ width: '35%' }} alt="perdanaN9"/>
                            <img src="/img/n91.jpg" style={{ width: '35%' }} alt="perdanaN9"/>
                        </div>
                    </div>
                }
            />
            <PopOutCard
                titleName="Sekolah@MMU Melaka Edisi Ramadan 2025"
                subtitle="CSR Programme | Assistant Head of Division"
                popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                A 7 day programme across Merlimau, Melaka involving 3 high schools, organized by MMU students.
                            </li>
                            <li>
                                I was the Assistant Head of Division for Multimedia, tasked to:
                                <ul className="sub-list">
                                    <li>Lead the refinement of the previous Canva module to be used for teaching</li>
                                    <li>Create the final project to test students’ ability in using Canva based on the module taught</li>
                                    <li>Taught students, set up computer labs, and was the event photographer</li>
                                    <li>Assist other high committees in designing banners, backdrops and after-event posts</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/melaka1.jpg" style={{ width: '35%' }} alt="melaka"/>
                            <img src="/img/melaka2.jpg" style={{ width: '35%' }} alt="melaka"/>
                        </div>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/melaka3.png" style={{ width: '35%' }} alt="melaka"/>
                            <img src="/img/melaka4.png" style={{ width: '35%' }} alt="melaka"/>
                        </div>
                    </div>
                }
            />
            <PopOutCard
                titleName="Light of Hope"
                subtitle="Volunteering Programme | Committee"
                popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                A volunteering programme organized by Sekretariat Sekolah@MMU in collaboration with Dapur Jalanan Kuala Lumpur.
                            </li>
                            <li>
                                Prepared food at Dapur Jalanan Kuala Lumpur headquarters, then proceeded to distribute them in the streets of Pasar Seni, Kuala Lumpur to those in need.
                            </li>
                            <li>
                                I was the treasurer, keeping track of expenses and making a financial report.
                            </li>
                                           
                        </ul>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/light.jpg" style={{ width: '55%' }} alt="lightofhope"/>
                        </div>
                    </div>
                }
            />
            </div>
        </div>
    )
}

export default NikCoco25