import NikCoco2223 from "./nik_coco2223"
import NikCoco24 from "./nik_coco24";
import NikCoco25 from "./nik_coco25";

function NikCoco() {
    return(
        <section className="center_vertical_container" style={{gap: "48px"}}>
            <h2 className="header_text fadeAnimation" style={{fontSize: "60px"}}>EXTRACURRICULAR ACTIVITIES</h2>

            <NikCoco25></NikCoco25>

            <NikCoco24></NikCoco24>

            <NikCoco2223></NikCoco2223>
            
        </section>
    )
}

export default NikCoco