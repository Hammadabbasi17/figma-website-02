import Image from "next/image";
import pic from "../../images/Ddsgnr Themes@2x.png"
import { LuBookLock, LuMenu } from "react-icons/lu";
import { Navbar } from "./components/Navbar/Navbar";
import { Courses } from "./components/Courses/Courses";
import Team from "./components/Team/Team";
import Customer from "./components/Customer/Customer";
import Footer from "./components/Footer/Footer";
import photo from "../../images/Image.png"
import Logo1 from "../../images/logo1.png"
import Logo2 from "../../images/logo2.png"
import Logo3 from "../../images/logo3.png"
import Logo4 from "../../images/Airbnb Logo.png"
import Logo5 from "../../images/logo.png"
import Logo6 from "../../images/logo6.png"
import { GrVolume } from "react-icons/gr";
import { GrMicrophone } from "react-icons/gr";
import { GoArrowSwitch } from "react-icons/go";
import { TbArrowsShuffle } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiBook2Line, RiBookLine } from "react-icons/ri";
import { FiPenTool } from "react-icons/fi";
import { TfiSplitH } from "react-icons/tfi";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";



export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-auto flex flex-col justify-around items-center lg:flex-row mt-[72px]">
        <div className=" w-full h-auto md:h-[390px] flex justify-center items-center">
          <div className=" flex flex-col gap-7  w-[428px]  md:w-[500px] pl-4  mt-[40px] pb-[60px] ">

            <h1 className=" text-[40px] font-[700] lg:text-[56px]">Learn new skills online with ease</h1>
            <h3 className=" text-[18px] font-[400] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h3>
            <div className="flex gap-[16px] btnc">
              <button className="w-[178px] h-[48px] rounded-[5px] border border-black text-[16px] font-[400] btn1 bg-black text-white hover:bg-transparent transition-all duration-[0.5s] hover:text-black">Start Learn</button>
              <button className="w-[178px] h-[48px] rounded-[5px] border border-black text-[16px] font-[400] btn2  text-black hover:bg-black transition-all duration-[0.5s] hover:text-white">Explore Courses</button>
            </div>

          </div>
        </div>

        <div className="w-full h-auto flex justify-center items-center ">
          <div className="w-[428px] xl:w-[640px] ">
            <Image src={photo} alt="" />
          </div>
        </div>

      </div>
      {/* hero section complete */}
      <div className="w-full h-[288px] flex flex-col justify-around items-center   xl:flex-row mt-[40px] ">
        <div>
          <h3 className="text-[24px] font-[700] pl-5">Trusted by 2000+ companies <br />worldwide.</h3>
        </div>
        <div className="flex ">
          <Image src={Logo1} alt="logo1" />
          <Image src={Logo2} alt="logo2" />
          <Image src={Logo3} alt="logo3" />
        </div>

        <div className="flex ">
          <Image src={Logo4} alt="logo1" />
          <Image src={Logo5} alt="logo2" />
          <Image src={Logo6} alt="logo3" />
        </div>

      </div>

      {/* Explore courses */}

      <div className="w-full h-[288px] flex flex-col justify-center items-center mt-[40px] " id="Services">
        <div>
          <h2 className="text-[32px] font-[700] lg:text-[48px] text-center lg:text-left">Explore Courses By Category</h2>
          <h3 className="text-[18px] font-[400] text-center">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h3>
        </div>


      </div>
      {/* courses section start */}
      <div className="w-full h-auto  flex justify-center items-center  overflow-hidden ">
        <div className="w-full h-auto">




          <div className="flex md:flex-col   lg:flex-row flex-col justify-evenly items-center w-full h-[500px] md:h-[600px] lg:h-[200px] ">
            {/* box one */}
            <div className="xl:w-[410px]   lg:w-[350px]  w-[380px] h-[132px] bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">






              {/* small box 1 */}


              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]">
                <FiPenTool />
              </div>

              <div>
                <h2 className="text-[20px] font-[600]">Design & Development</h2>
                <h3>50+ Courses Available</h3>
              </div>





            </div>




            {/* box one end */}




            {/* box two start */}

            <div className="xl:w-[410px]  lg:w-[350px]  w-[380px] h-[132px] bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">








              {/* small box 2 */}


              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]">
                <GrVolume />
              </div>

              <div>
                <h2 className="text-[20px] font-[600]">Marketing</h2>
                <h3>50+ Courses Available</h3>
              </div>











            </div>






            {/* box two end */}


            {/* box three start */}

            <div className="xl:w-[410px] lg:w-[350px]  w-[380px] h-[132px] bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">



              {/* small box 3 */}

              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]">
                <TbArrowsShuffle />
              </div>

              <div>
                <h2 className="text-[20px] font-[600]">Development</h2>
                <h3>50+ Courses Available</h3>
              </div>






            </div>
            {/* box three end */}


          </div>

          {/* large box 1 end */}
          <div className="flex md:flex-col lg:flex-row flex-col justify-evenly items-center w-full h-[500px] md:h-[600px] lg:h-[200px] ">




            {/* box four start */}
            <div className="xl:w-[410px]  lg:w-[350px] w-[380px] h-[132px]  bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">
              {/* small box 4 */}

              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]"> <GrMicrophone /></div>
              <div>
                <h2 className="text-[20px] font-[600]">Communication</h2>
                <h3>50+ Courses Available</h3>
              </div>



            </div>







            <div className="xl:w-[410px]  lg:w-[350px] w-[380px] h-[132px]  bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">

              {/* small box 5 */}

              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]"> <TfiSplitH /></div>
              <div>
                <h2 className="text-[20px] font-[600]">Digital Marketing</h2>
                <h3>50+ Courses Available</h3>
              </div>






            </div>
            <div className="xl:w-[410px]  lg:w-[350px] w-[380px] h-[132px]  bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">
              {/* small box 6 */}
              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]"> <GoArrowSwitch /></div>
              <div>
                <h2 className="text-[20px] font-[600]">Self Development</h2>
                <h3>50+ Courses Available</h3>
              </div>







            </div>





          </div>




          {/* large box 2 end */}
          <div className="flex md:flex-col lg:flex-row flex-col justify-evenly items-center w-full h-[500px] md:h-[600px] lg:h-[200px] ">



            <div className="xl:w-[410px] lg:w-[350px] w-[380px] h-[132px]  bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">


              {/* small box 7 */}
              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]"> <IoBagRemoveOutline /></div>
              <div>
                <h2 className="text-[20px] font-[600]">Business</h2>
                <h3>50+ Courses Available</h3>
              </div>



            </div>


            <div className="xl:w-[410px]  lg:w-[350px] w-[380px] h-[132px]  bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">


              {/* small box 8 */}

              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]"> <SlBookOpen /></div>
              <div>
                <h2 className="text-[20px] font-[600]">Finance</h2>
                <h3>50+ Courses Available</h3>
              </div>






            </div>
            <div className="xl:w-[410px]  lg:w-[350px] w-[380px] h-[132px]  bg-lightwhite flex md:flex-col  lg:flex-row text-black justify-around items-center">

              {/* small box 9 */}
              <div className="w-[100px] h-[100px] flex justify-center items-center bg-white text-[35px]"> <RiBookLine /></div>
              <div>
                <h2 className="text-[20px] font-[600]">Consulting</h2>
                <h3>50+ Courses Available</h3>
              </div>





            </div>
          </div>




        </div>

      </div>

      {/* courses section cpmpleted */}
               
               

      <div className="w-full h-[100px] mt-[40px] flex justify-center items-center">
        <button className="w-[155px] h-[48px]  bg-transparent text-[14px] text-black  border-[1px] border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">View All Courses</button>
      </div>





      <div className="w-full h-auto md:h-[150px] mt-[150px] flex   justify-center items-center " id="Achivement">
        <div className="w-[80%] h-auto">
          <h1 className="text-[32px] md-[48px] font-[700] text-center">Our Achivements</h1>
          <h3 className="text-[18px] font-[400] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h3>
        </div>
      </div>



      <div className="w-full h-[140px] md:h-[96px] mt-[40px] flex flex-col md:flex-row md:justify-center items-center justify-between">
        <div className="w-[50%] flex justify-between md:justify-evenly items-center">
          <div className="flec flex-col ">
            <h1 className="text-[20px] md:text-[40px] font-[700]">+200</h1>
            <h2 className="text-[16px] font-[400] text-center">Courses</h2>
          </div>



          <div className="flec flex-col">
            <h1 className="text-[20px] md:text-[40px] font-[700]">50K</h1>
            <h2 className="text-[16px] font-[400] text-center">Mentors</h2>
          </div>


        </div>
        <div className="w-[50%] flex justify-between md:justify-evenly items-center ">


          <div className="flec flex-col">
            <h1 className="text-[20px] md:text-[40px] font-[700]">370K</h1>
            <h2 className="text-[16px] font-[400] text-center">Students</h2>
          </div>





          <div className="flec flex-col">
            <h1 className="text-[20px] md:text-[40px] font-[700] text-right">100+</h1>
            <h2 className="text-[16px] font-[400] text-center">Recognition</h2>
          </div>

        </div>

      </div>


      {/* Achivements section completed */}



       {/* Courses section2 */}
        <div className="w-full h-auto md:h-[200px] mt-[250px] flex flex-col gap-6 justify-center items-center" id="Courses">
                <h1 className="text-[32px] md:text-[56px] font-[700]">Courses</h1>
                <h2 className="text-[18px] font-[400] ">Your Ultimate Guide to learning</h2>

        </div>


        <div className="w-full h-auto md:h-[100px] mt-[40px] flex  gap-6 justify-center items-center">
                <h2 className="text-[18px] underline">Popular</h2>
                <h2 className="text-[18px]">Recommended</h2>
                <h2 className="text-[18px]">Best Price</h2>

        </div>



         <Courses/>
     
               <div className="w-full h-[100px] mt-[40px] flex justify-center items-center">
                        <button className="w-[155px] h-[48px]  bg-transparent text-[14px] text-black  border-[1px] border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">View All Courses</button>
               </div>


               <Team/>

                <Customer/>
               


               <div className="w-full h-[100px] flex  justify-center items-center mt-[300px] ">
                   <div className="w-[80%] h-[300px] lg:h-[82px] flex justify-between items-center lg:flex-row flex-col">
                       <div>
                        <h1 className="text-[18px] font-[600] pb-2 text-black text-center lg:text-left">Subscribe to our newsletter</h1>
                        <h3 className="text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

                       </div>
                         <div>
                           <div className="flex gap-6 lg:flex-row flex-col justify-center items-center">
                            
                            <input type="email" placeholder="Enter your email" className="w-[300px] h-[48px] border border-black"/>
                            
                            <button className="w-[155px] h-[48px]  bg-transparent text-[14px] text-black  border-[1px] border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Subscribe</button>
                           </div>
                           <h2 className="pt-7">By subscribing you agree to with our Privacy Policy</h2>

                         </div>

                  </div>
               </div>



                  








            <Footer/>


            <div className="w-full h-auto lg:h-[100px] flex justify-center items-center ">
              <div className="w-[80%] h-[250px] flex lg:flex-row flex-col justify-between items-center border-t border-black lg:h-24">
                <div className="flex lg:flex-row flex-col gap-5 pt-7">
                  <h2 className="text-[14px] text-center">2023 Ddsgnr. All right reserved.</h2>
                  <h2 className="text-[14px] text-center">Privacy Policy</h2>
                  <h2 className="text-[14px] text-center">Terms of Service</h2>
                  <h2 className="text-[14px] text-center">Cookies Settingse</h2>
                </div>


                  <div className="flex gap-3">
                    <GrFacebookOption className="text-[24px]"/>
                    <IoLogoInstagram className="text-[24px]"/>
                    <RiTwitterFill className="text-[24px]"/>
                    <RiLinkedinBoxFill className="text-[24px]"/>


                  </div>


              </div>

            </div>



    </div >
  );
}
