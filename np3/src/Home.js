import MainOptions from "./components/main_options";

function Home() {
    return(
        <div id="optionbody">

            <MainOptions
                pageLink="/nik"
                title="NIK"
                subtitle="About me, Contacts & Resume"
                image="img/nik_main.jpg"
            />

            <MainOptions
                pageLink="/projects"
                title="PROJECTS"
                subtitle="Personal Coding Projects"
                image="img/project_main.png"
            />

            <MainOptions
                pageLink="/photos"
                title="PHOTOS"
                subtitle="Snap. Snap. Snap."
                image="img/photo_main.jpg"
            />

            <MainOptions
                pageLink="/posters"
                title="POSTERS"
                subtitle="Collection of Artworks"
                image="img/poster_main.png"
            />

            </div>
    )
}

export default Home;