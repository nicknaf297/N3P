import PopOutCard from "./pop_out_card";

function NikCoco2223() {
    return(
        <div className="center_vertical_container" style={{gap: "32px"}}>

            <div className="center_vertical_container" style={{gap: "20px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "25px"}}>2023</h2>
                <div className="center_horizontal_container fadeAnimation" style={{gap: "32px"}}>
                    <PopOutCard
                    titleName="CARES UMMC"
                    subtitle="Volunteering Programme | Participant"
                    popupContent={
                        <div className='center_vertical_container' style={{gap: "32px"}}>
                            <ul className="body_text">
                                <li>
                                    A volunteering programme held at Pusat Perubatan Universiti Malaya, where the goal is  to take care of child patients diagnosed with cancer.

                                </li>
                                <li>
                                    We played and entertained the children with board games, and made conversations with them.
                                </li>
                            </ul>
                            <img src="/img/cares.jpg" style={{ width: '40%' }} alt="cares"/>
                        </div>
                        }
                    />
                    <PopOutCard
                    titleName="Minggu Mesra Pelajar"
                    subtitle="Orientation Programme | Participant"
                    popupContent={
                        <div className='center_vertical_container' style={{gap: "32px"}}>
                            <ul className="body_text">
                                <li>
                                    A volunteer programme opened to alumni of ASASIpintar to help handle the orientation of new ASASIpintar students.
                                </li>
                                <li>
                                    Involved in helping with registration, setting up venues, moving belongings and taking photos.
                                </li>
                                <li>
                                    Handled activities and sharing sessions.
                                </li>
                            </ul>
                            <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                                <img src="/img/mmp1.jpg" style={{ width: '40%' }} alt="mmp"/>
                                <img src="/img/mmp2.jpg" style={{ width: '40%' }} alt="mmp"/>
                            </div>
                        </div>
                        }
                    />
                    
                </div>
            </div>

             <div className="center_vertical_container fadeAnimation" style={{gap: "20px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "25px"}}>2022</h2>
            <PopOutCard
                titleName="International Future Scientist Conference"
                subtitle="Research Competition | Best Review Paper, Gold Medallist"
                popupContent={
                    <div className='center_vertical_container' style={{gap: "32px"}}>
                        <ul className="body_text">
                            <li>
                                Title of Research Paper: “Evaluation of Antibacterial Properties of Kelulut Honey, Cinnamon, Turmeric and Garlic Extracts against <em>Escherichia coli</em>: A Comprehensive Review”
                            </li>
                            <li>
                                Reviewed over 15+ research papers and collaborated with Mohd Razif Mamat from Malaysia Genome Institute.
                            </li>
                            <li>
                                Obtained <strong>Gold Medal</strong> and <strong>Best Research Award</strong> for Review Paper Category.
                            </li>
                        </ul>
                        <div className="center_horizontal_container" style={{justifyContent: "center", gap: "32px"}}>
                            <img src="/img/ifsc.jpg" style={{ width: '40%' }} alt="ifsc"/>
                            <img src="/img/ifsc_best.jpg" style={{ width: '40%' }} alt="ifsc_best"/>
                        </div>
                    </div>
                }
            />
            </div>

        </div>
    )
}

export default NikCoco2223