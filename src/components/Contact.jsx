import {AiFillGithub,AiFillLinkedin,AiFillDribbbleCircle} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdOutgoingMail} from "react-icons/md"
import {BsFillTelephoneFill,BsCupHotFill} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"

function Contact (){
    return(
        <div>
            <div className="bg-[#f39033] w-[50%] h-[10vh] flex items-center justify-center  mx-auto"><h2 className="text-3xl text-[#fff]  font-bold text-center ">CONTACT</h2></div>
            <div class=" py-16">
  <div class="">
    
    <div class="bg-white p-8 rounded-lg shadow-[0_0_7px_lightgray]">
      <h2 class="text-2xl font-semibold text-[#f39033] mb-4">Contact Me</h2>
      <form>
        <div className="mb-4">
          <label for="name" class="block text-gray-600 font-medium">Name</label>
          <input type="text" id="name" name="name" class="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Your Name" required />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-600 font-medium">Email</label>
          <input type="email" id="email" name="email" class="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" placeholder="Your Email" required/>
        </div>

        <div class="mb-4">
          <label for="message" class="block text-gray-600 font-medium">Message</label>
          <textarea id="message" name="message" class="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" rows="4" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" class="bg-[#f39033] text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-orange-500]">Submit</button>
      </form>
      <div className="flex items-center justify-between">

      <div class="mt-8">
        <h3 class="text-xl font-semibold text-[#f39033] mb-4">Connect with me</h3>
        <div class="flex space-x-4">
          <a href="https://your-social-link" >
          <AiFillGithub size={40} color="black"/>
          </a>
          <a href="https://your-social-link" >
          <AiFillDribbbleCircle size={40} color="#ea4c89"/>
          </a>
          <a href="https://your-social-link" >
          <AiFillLinkedin size={40} color="#0A66C2"/>
          </a>
          


        
        </div>
      </div>
      <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">We can get in touch through </h3>
     <p className="flex items-center  gap-2"><GoLocation color="#4282EF " size={30}/> Mashimoni,Kibera</p> 
     <p className="flex items-center  gap-2"><MdOutgoingMail size={30} color=""/> mideva061@gmail.com</p> 
     <p className="flex items-center  gap-2"><BsFillTelephoneFill size={30}/> 0796388487</p> 


      </div>
      </div>

      
    </div>
  </div>
</div>
<p className="flex bg-[#f39033] text-white items-center text-xl justify-center gap-1">Created with<AiFillHeart size={20} color="red"/>from the owner Joyce  Mideva<BsCupHotFill color="#fff" size={20}/></p>

        </div>
    )
}
export default Contact