import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillDribbbleCircle,
  } from "react-icons/ai";
function Menu() {
    return(
        <div>
            <nav className="flex bg-white  items-center justify-center gap-8 ">
        <h1 className="text-[#f39033] text-3xl font-extrabold">JMP</h1>
        <ul className="flex items-center text-lg py-7 justify-center gap-7">
          <li><a href="#">About</a></li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <AiFillGithub size={40} color="black" />
        <AiFillLinkedin size={40} color="#0A66C2" />
        <AiFillDribbbleCircle size={40} color="#ea4c89" />
      </nav>
        </div>
    )
}
export default Menu