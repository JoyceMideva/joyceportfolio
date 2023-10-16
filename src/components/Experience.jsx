import { BiMobile } from "react-icons/bi";
import {SiTaichigraphics} from "react-icons/si"
import {BsWebcamFill} from "react-icons/bs"
import {MdOutlineSendToMobile} from "react-icons/md"

function Experience(){
    return(
        <>
         <section className="container mx-auto">
       
          <h2 className="text-3xl font-bold text-center py-6 text-[#f39033]">What I'm Specialised in</h2>
        <div className=" flex items-center justify-center gap-9">
          <div className=" shadow-[0_0_7px_lightgray] flex items-center justify-center flex-col  px-4 w-[30%] h-[33vh]">
          <MdOutlineSendToMobile color="" size={100}/>
            <p className="text-3xl text-[#f39033] text-center">Mobile Development</p>
            <p> the mobile development process involves creating installable software bundles (code, binaries, assets, etc.) , implementing backend services such as data access with an API, and testing the application on target devices.which are very crucial in installing some application</p>
          </div>
          <div className=" shadow-[0_0_7px_lightgray] flex items-center justify-center flex-col w-[30%] px-4 my-6 h-[33vh]">
          <BsWebcamFill color="" size={100}/>
            <p className="text-3xl text-[#f39033] text-center">Web Development</p>
            <p>I Create or implement designs demanded by a client or created by a design team. I have expert-level knowledge of a variety of programming languages, including HTML (HyperText Markup Language), CSS, PHP, and JavaScript but also extending to other languages ( Python), frameworks, and libraries.</p>
          </div>
          <div className=" flex items-center justify-center flex-col shadow-[0_0_7px_lightgray] px-4 w-[30%] h-[33vh]">
          <SiTaichigraphics color="" size={100}/>
            <p className="text-3xl text-[#f39033] text-center">Graphic Design</p>
            <p> I have experience in designing logos and making outlines using figma as my crucial tool and also canva as a second optionBy applying visual hierarchy and page layout techniques, i use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>
          </div>
        </div>
      </section>
        </>
    )
}
export default Experience