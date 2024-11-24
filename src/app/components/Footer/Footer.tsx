
import Image from "next/image"
import Pic from "../../../../images/Ddsgnr Themes@2x.png"
const Footer = () => {
  return (
    <div className="w-full h-[1000px] lg:h-[500px] mt-[200px] flex justify-center items-center bg-lightwhite">
       <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center lg:items-start  w-[80%] gap-8 lg:gap-0 ">

            <div className="w-[250px] flex justify-center lg:justify-start ">
            <Image src={Pic} alt="Pic"/>
           </div>
        
           <div className="flex flex-col gap-6 w-[250px]">
            
            <h2 className="text-[16px] font-[600] text-center lg:text-left">Courses</h2>
            <h3 className=" text-center lg:text-left">Business</h3>
            <h3 className=" text-center lg:text-left">Development</h3>
            <h3 className=" text-center lg:text-left">Technology</h3>
            <h3 className=" text-center lg:text-left">Design</h3>
            <h3 className=" text-center lg:text-left">Programming</h3>
          </div>
            









          <div className="flex flex-col gap-6 w-[250px]">
            <h2 className="text-[16px] font-[600] text-center lg:text-left">Resources</h2>
            <h3 className=" text-center lg:text-left">Career</h3>
            <h3 className=" text-center lg:text-left">Resume</h3>
            <h3 className=" text-center lg:text-left">Learning</h3>
            <h3 className=" text-center lg:text-left">Interview Preparation</h3>
            <h3 className=" text-center lg:text-left">Jobs</h3>
          </div>







          <div className="flex flex-col gap-6 w-[250px]">
            
            <h2 className="text-[16px] font-[600] text-center lg:text-left">About Us</h2>
            <h3 className=" text-center lg:text-left">Contact</h3>
            <h3 className=" text-center lg:text-left">Help/Support</h3>
            <h3 className=" text-center lg:text-left">FAQ</h3>
            <h3 className=" text-center lg:text-left">Terms and Conditions</h3>
            <h3 className=" text-center lg:text-left">Partners</h3>
          </div>










        
        
        
        
        
        
        
        
        
        
        
         </div>
    </div>
  )
}

export default Footer