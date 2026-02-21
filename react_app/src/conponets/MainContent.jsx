import "../styles/conponets/mainContent.sass"
import ProjectsContainer from "./ProjectsContainer";
import TecnologiesContainer from "./TecnologiesContainer";
import AboutContainer from "./AboutContainer"

function MainContent() {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TecnologiesContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent 