import Image from "next/image";
import Women2 from "../../../../images/women 2.png";
import Boy1 from "../../../../images/boy 1.png";
import Women3 from "../../../../images/women 3.png";
import { FaStar } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { PiDotOutlineFill } from "react-icons/pi";



const Customer = () => {
    return (
        <div>

            <div className="w-full h-auto md:h-[150px] mt-[250px] flex   justify-center items-center " id="Testimonial">
                <div className="w-[90%] h-auto">
                    <h1 className="text-[32px] md-[48px] font-[700] text-center lg:text-left">Customer testimonials</h1>
                    <h3 className="text-[18px] font-[400] text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                </div>
            </div>




            <div className="w-full h-[1200px] lg:h-[420px] flex lg:flex-row flex-col justify-around items-center overflow-hidden">




                {/* box 1 */}

                <div className="w-[350px] lg:w-[362.67px] h-[321.89px] flex flex-col justify-center gap-7 p-5 border border-black">

                    <div className="flex text-[20px]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>


                    <h2 className="text-[18px] font-[400]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</h2>


                    <div className="flex  gap-3 justify-left items-center">
                        <div className="w-[56px] h-[56px] ">
                            <Image className="rounded-[50%]" src={Women2} alt="women2" />
                        </div>

                        <div className="" >
                            <h2 className="text-[16px] font-[600]">James Nduku</h2>
                            <h3 className="text-[16px] font-[400]">Software Developer</h3>

                        </div>
                    </div>

                </div>

                {/* box 2 */}






                <div className="w-[350px] lg:w-[362.67px] h-[321.89px] flex flex-col justify-center gap-7 p-5 border border-black">

                    <div className="flex text-[20px]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>


                    <h2 className="text-[18px] font-[400]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</h2>


                    <div className="flex  gap-3 justify-left items-center">
                        <div className="w-[56px] h-[56px] ">
                            <Image className="rounded-[50%]" src={Boy1} alt="boy1" />
                        </div>

                        <div className="" >
                            <h2 className="text-[16px] font-[600]">Erick Kipkemboi</h2>
                            <h3 className="text-[16px] font-[400]">Scrum Master</h3>

                        </div>
                    </div>

                </div>
















                {/* box 3 */}
                <div className="w-[350px] lg:w-[362.67px] h-[321.89px] flex flex-col justify-center gap-7 p-5 border border-black">

                    <div className="flex text-[20px]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>


                    <h2 className="text-[18px] font-[400]">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</h2>


                    <div className="flex  gap-3 justify-left items-center">
                        <div className="w-[56px] h-[56px] ">
                            <Image className="rounded-[50%]" src={Women3} alt="women3" />
                        </div>

                        <div className="" >
                            <h2 className="text-[16px] font-[600]">Stephen Kerubo</h2>
                            <h3 className="text-[16px] font-[400]">UI/UX Designer</h3>

                        </div>
                    </div>

                </div>













            </div>



            <div className="w-[100%] h-auto mt-[10px] flex justify-around lg:justify-between items-center md:pl-[135px] md:pr-[130px] ">
                <div className="flex text-[24px] font-[700]">
                    <PiDotOutlineFill />
                    <PiDotOutlineFill />
                    <PiDotOutlineFill />
                    <PiDotOutlineFill />
                    <PiDotOutlineFill />
                </div>


                <div className="w-[111px] h-[48px] flex gap-3 ">

                    <IoArrowBackOutline className="text-[24px] w-[48px] h-[48px] border border-black rounded-[50%]" />
                    <IoArrowForward className="text-[24px]  w-[48px] h-[48px] border border-black rounded-[50%] " />


                </div>
            </div>




        </div>
    )
}

export default Customer
