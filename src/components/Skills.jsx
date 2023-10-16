import { IoLogoHtml5 } from "react-icons/io";
import { FaReact,FaPython,FaWordpress } from "react-icons/fa";
import { TbBrandJavascript,TbBrandReactNative,TbBrandNextjs } from "react-icons/tb";
function Skills(){
    return(
        <>

      <div className="shadow-[0_0_7px_lightgray] bg-[#f39033] my-7 py-11 container mx-auto">

<h2 className="text-center text-3xl py-3 text-[#fff] font-bold container">
  MY SKILLS
</h2>
<ul  className=" bg-white h-[40vh]  flex items-center justify-center gap-10  pt-5">
  <li className="flex text-2xl gap-3  justify-center  items-center flex-col border-solid-2 w-[10%] h-[20vh] ">
    <IoLogoHtml5  size={70} color="#f39033"/>
    HTML/CSS
  </li>
  <li className="flex text-2xl   gap-3 flex-col items-center justify-center w-[10%] h-[20vh] " ><FaReact size={70} color="#4282ef"/>React</li>
  <li className="flex text-2xl  gap-3 flex-col items-center justify-center w-[10%] h-[20vh] "><TbBrandJavascript size={70} color="yellow"/>Javascript</li>
  <li className="flex text-2xl gap-3 flex-col items-center justify-center  w-[10%] h-[20vh]"><TbBrandReactNative size={70} color="#4282ef"/>React-Native</li>
  <li className="flex text-2xl gap-3 flex-col items-center justify-center w-[10%] h-[20vh]"><FaPython size={70} color="#f39033"/>Python</li>
  <li className="flex text-2xl gap-3 flex-col items-center w-[10%] justify-center h-[20vh]"><TbBrandNextjs size={70} color="#000"/>Next js</li>
  <li className="flex  text-2xl gap-3 flex-col items-center w-[10%] justify-center h-[20vh]"><FaWordpress size={70} color="#4282ef"/>WordPress</li>
</ul>
</div>
        </>
    )
}
export default Skills