import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    return(
        <div>
            <Menu/>
            <Nav/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    )
}
export default Home