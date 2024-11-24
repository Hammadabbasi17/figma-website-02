import Image from "next/image"
import Laptop from "../../../../images/laptop.png"
import Code from "../../../../images/code.png"
import Data from "../../../../images/data.png"
import Colour from "../../../../images/colour.png"
import Library from "../../../../images/librari.png"
import Modern from "../../../../images/modern.png"
export const Courses = () => {
    return (
        <div>



            <div className="w-full h-auto  flex justify-center items-center  overflow-hidden " >
                <div className="w-full h-auto">



                              {/* Large box 1 start */}
                    <div className="flex md:flex-col   xl:flex-row flex-col justify-around items-center w-full h-[1800px] xl:h-[600px] ">
                        {/* box one */}
                        <div className="xl:w-[416px]  w-[380px] h-[534px] bg-lightwhite flex-col  text-black justify-between items-center">






                            {/* small box 1 */}


                            <div className="w-[380px] xl:w-[416px] h-[300px] flex justify-center items-center">
                                <Image src={Laptop} alt="laptop"/>
                            </div>

                            <div className="w-[380px] xl:w-[416px] h-[210px] pl-8">
                                <h2 className="text-[14px] font-[600] float-right pt-4 pr-3">5.0</h2>
                                <h2 className="text-[14px] font-[600] text-left pt-4">Design</h2>
                                <h1 className="text-[24px] font-[700] pt-4">UX/UI Design 201</h1>
                                <h3 className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h3>
                                 <div className="flex gap-2">
                                    <button className="w-[177px] h-[40px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-4" >$400</button>
                                 </div>
                            </div>





                        </div>




                        {/* box one end */}




                        {/* box two start */}

                        <div className="xl:w-[416px]  w-[380px] h-[534px] bg-lightwhite flex-col  text-black justify-between items-center">








                            {/* small box 2 */}


                            <div className="w-[380px] xl:w-[416px] h-[300px] flex justify-center items-center">
                                <Image src={Code} alt="code"/>
                            </div>

                            <div className="w-[380px] xl:w-[416px] h-[210px] pl-8">
                                <h2 className="text-[14px] font-[600] float-right pt-4 pr-3">5.0</h2>
                                <h2 className="text-[14px] font-[600] text-left pt-4">Programming</h2>
                                <h1 className="text-[24px] font-[700] pt-4">Introduction to Python</h1>
                                <h3 className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h3>
                                 <div className="flex gap-2">
                                    <button className="w-[177px] h-[40px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-4" >$400</button>
                                 </div>
                            </div>










                        </div>






                        {/* box two end */}


                        {/* box three start */}

                        <div className="xl:w-[416px]  w-[380px] h-[534px] bg-lightwhite flex-col  text-black justify-between items-center">



                            {/* small box 3 */}

                            <div className="w-[380px] xl:w-[416px] h-[300px] flex justify-center items-center">
                                <Image src={Data} alt="data"/>
                            </div>

                            <div className="w-[380px] xl:w-[416px] h-[210px] pl-8">
                                <h2 className="text-[14px] font-[600] float-right pt-4 pr-3">5.0</h2>
                                <h2 className="text-[14px] font-[600] text-left pt-4">Bussiness</h2>
                                <h1 className="text-[24px] font-[700] pt-4">Data Analysis for Beginners</h1>
                                <h3 className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h3>
                                 <div className="flex gap-2">
                                    <button className="w-[177px] h-[40px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-4" >$400</button>
                                 </div>
                            </div>






                        </div>
                        {/* box three end */}


                    </div>

                    {/* large box 1 end */}
                      {/* Large box 2 start */}
                    <div className="flex md:flex-col   xl:flex-row flex-col justify-around items-center w-full h-[1800px] xl:h-[600px] ">




                        {/* box four start */}
                        <div className="xl:w-[416px]  w-[380px] h-[534px] bg-lightwhite flex-col  text-black justify-between items-center">
                            {/* small box 4 */}

                            <div className="w-[380px] xl:w-[416px] h-[300px] flex justify-center items-center">
                                <Image src={Colour} alt="colour"/>
                            </div>

                            <div className="w-[380px] xl:w-[416px] h-[210px] pl-8">
                                <h2 className="text-[14px] font-[600] float-right pt-4 pr-3">5.0</h2>
                                <h2 className="text-[14px] font-[600] text-left pt-4">Art</h2>
                                <h1 className="text-[24px] font-[700] pt-4">Art Specialization</h1>
                                <h3 className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h3>
                                 <div className="flex gap-2">
                                    <button  className="w-[177px] h-[40px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-4" >$400</button>
                                 </div>
                            </div>



                        </div>







                        <div className="xl:w-[416px]  w-[380px] h-[534px] bg-lightwhite flex-col  text-black justify-between items-center">

                            {/* small box 5 */}

                            <div className="w-[380px] xl:w-[416px] h-[300px] flex justify-center items-center">
                                <Image src={Library} alt="library"/>
                            </div>

                            <div className="w-[380px] xl:w-[416px] h-[210px] pl-8">
                                <h2 className="text-[14px] font-[600] float-right pt-4 pr-3">5.0</h2>
                                <h2 className="text-[14px] font-[600] text-left pt-4">Law</h2>
                                <h1 className="text-[24px] font-[700] pt-4">Rule of Law</h1>
                                <h3 className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h3>
                                 <div className="flex gap-2">
                                    <button className="w-[177px] h-[40px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-4" >$400</button>
                                 </div>
                            </div>





                        </div>
                        <div className="xl:w-[416px]  w-[380px] h-[534px] bg-lightwhite flex-col  text-black justify-between items-center">
                            {/* small box 6 */}
                            




                            <div className="w-[380px] xl:w-[416px] h-[300px] flex justify-center items-center">
                                <Image src={Modern} alt="modern"/>
                            </div>

                            <div className="w-[380px] xl:w-[416px] h-[210px] pl-8">
                                <h2 className="text-[14px] font-[600] float-right pt-4 pr-3">5.0</h2>
                                <h2 className="text-[14px] font-[600] text-left pt-4">Tech</h2>
                                <h1 className="text-[24px] font-[700] pt-4">Introduction to webflow</h1>
                                <h3 className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h3>
                                 <div className="flex gap-2">
                                    <button className="w-[177px] h-[40px] text-[16px] mt-4 border bg-transparent border-black rounded-[5px] hover:bg-black hover:text-white transition-all duration-[0.5s]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px] text-[16px] mt-4" >$400</button>
                                 </div>
                            </div>






                        </div>





                    </div>




                    {/* large box 2 end */}
                  




                </div>

            </div>

            {/* courses section cpmpleted */}

















        </div>
    )
}
