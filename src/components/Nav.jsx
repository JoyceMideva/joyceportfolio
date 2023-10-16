import joy from "../assets/images/jom.jpg";


function Nav() {
  return (
    <div className="bg-gradient-to-r from-orange-400  to-blue-500">

    
    <div className="container mx-auto  ">
      
      <div className="h-[80vh]  flex w-[100%]  items-center  gap-10 ">
        <div className="flex-1 w-[50%] h-[60vh]  ">
          <h1 className="text-center text-5xl text-[#fff] ">
            I'm Joyce Mideva
          </h1>
          <h2 className="text-center text-xl pt-3 text-[#fff]">
            A Full-Stack Web Developer
          </h2>
          <p className="text-center text-xl pt-3 text-[#fff] ">
            I Specialise in both the front-end and the back-end.I design and
            code beautiful code from scratch from web apps to mobile apps hence
            loving what i do. I'm experienced in React, JavaScript, and more. My
            goal is to build innovative solutions that make a positive impact.I
            enjoy solving problems and turning ideas into interactive and
            user-friendly experiences.
          </p>
          <p className="text-xl text-[#fff]">
              I'm specialised in both front-end and back-end,hence
              I'm experienced in React, JavaScript, and more. My goal is to
              build innovative solutions that make a positive impact.I enjoy
              solving problems and turning ideas into interactive and
              user-friendly experiences.
            </p>
            <p className="text-xl text-[#fff] py-4">
              For now i have different projects which i have made including an
              app that links students with financial problems and those who are
              willing to provide scholarships to those students but i'm still
              working on it.
            </p>
            <p className="text-xl text-[#fff]">
              In my free time, I love working on personal coding projects, open
              source contributions, and keeping my coding skills sharp. I also
              enjoy hiking and drawing.
            </p>
        </div>
        <div className="flex-1 flex w-[50%] h-[70vh]  ">
          <div className="">
            <div className="pt-2 pl-3 h-[500px] w-[600px]">
              <img src={joy} alt="" srcset="" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className=" pt-7 pl-3">
              <button className="bg-[#f39033] p-4 rounded-md text-[#fff]">
                Get In Touch
              </button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  );
}
export default Nav;
