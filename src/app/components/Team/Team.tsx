import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { LiaBasketballBallSolid } from "react-icons/lia";

import Image from "next/image";
import Boy1 from "../../../../images/boy 1.png"
import Boy2 from "../../../../images/boy 2.png"
import Boy3 from "../../../../images/boy 3.png"
import Women1   from "../../../../images/women 1.png"
import Women2 from "../../../../images/women 2.png"
import Women3 from "../../../../images/women 3.png"
import { Linden_Hill } from "next/font/google";











const Team = () => {
  return (
         <div>
        
        <div className="w-full h-auto md:h-[150px] mt-[150px] flex   justify-center items-center " id="About">
                   <div className="w-[80%] h-auto">
                            <h1 className="text-[48px] md-[48px] font-[700] text-center">Our team</h1>
                               <h3 className="text-[18px] font-[400] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                    </div>
        </div>      




        
        
        <div className="w-full h-auto  flex justify-center items-center  overflow-hidden ">
                <div className="w-full h-auto">



                              {/* Large box 1 start */}
                    <div className="flex md:flex-col   lg:flex-row flex-col justify-between items-center w-full lg:h-[482px] h-[800px] mt-[80px] lg:mt-0">
                        {/* box one */}
                        <div className=" w-[394.67px] h-[209px] bg-lightwhite flex-col  text-black justify-center items-center">






                               {/* small box 1 */}

                                <div className="w-full flex justify-center items-center mb-7">
                                    <div className="w-[80px] h-[80px]"><Image src={Boy1} alt="boy1"/></div>
                                </div>

                            <div className=" flex flex-col justify-center items-center ">
                               
                                <h1 className="text-[20px] font-[600]">James Nduku</h1>
                                <h1 className="text-[18px] font-[400] ">Marketing Coordinator</h1>
                                 <div className="flex justify-center gap-4 items-center pt-3 text-[24px]">
                                    <RiLinkedinBoxFill/>
                                    <RiTwitterFill/>
                                    <LiaBasketballBallSolid/>
                                </div>
                            </div>





                        </div>




                        {/* box one end */}




                        {/* box two start */}

                        <div className="w-[394.67px] h-[209px] bg-lightwhite flex-col  text-black justify-between items-center">








                            {/* small box 2 */}


                            {/* small box 1 */}

                            <div className="w-full flex justify-center items-center mb-7">
                                    <div className="w-[80px] h-[80px]"><Image src={Women1} alt="women1"/></div>
                                </div>

                            <div className=" flex flex-col justify-center items-center ">
                               
                                <h1 className="text-[20px] font-[600]">Joseph Munyambu</h1>
                                <h1 className="text-[18px] font-[400] ">Nursing Assistant</h1>
                                 <div className="flex justify-center gap-4 items-center pt-3 text-[24px]">
                                    <RiLinkedinBoxFill/>
                                    <RiTwitterFill/>
                                    <LiaBasketballBallSolid/>
                                </div>
                            </div>











                        </div>






                        {/* box two end */}


                        {/* box three start */}

                        <div className="w-[394.67px] h-[209px] bg-lightwhite flex-col  text-black justify-between items-center">



                            {/* small box 3 */}

                           {/* small box 1 */}

                           <div className="w-full flex justify-center items-center mb-7">
                                    <div className="w-[80px] h-[80px]"><Image src={Women2} alt="women2"/></div>
                                </div>

                            <div className=" flex flex-col justify-center items-center ">
                               
                                <h1 className="text-[20px] font-[600]">Joseph Ngumbau</h1>
                                <h1 className="text-[18px] font-[400] ">Medical Assistant</h1>
                                 <div className="flex justify-center gap-4 items-center pt-3 text-[24px]">
                                    <RiLinkedinBoxFill/>
                                    <RiTwitterFill/>
                                    <LiaBasketballBallSolid/>
                                </div>
                            </div>







                        </div>
                        {/* box three end */}


                    </div>

                    {/* large box 1 end */}
                      {/* Large box 2 start */}
                    <div className="flex md:flex-col   lg:flex-row flex-col justify-between items-center w-full  h-[800px] lg:h-auto mt-[80px] lg:mt-0">




                        {/* box four start */}
                        <div className="w-[394.67px] h-[209px] bg-lightwhite flex-col  text-black justify-between items-center">
                            {/* small box 4 */}

                           {/* small box 1 */}

                           <div className="w-full flex justify-center items-center mb-7">
                                    <div className="w-[80px] h-[80px]"><Image src={Boy2} alt="boy2"/></div>
                                </div>

                            <div className=" flex flex-col justify-center items-center ">
                               
                                <h1 className="text-[20px] font-[600]">Erick Kipkemboi</h1>
                                <h1 className="text-[18px] font-[400] ">Web Designer</h1>
                                 <div className="flex justify-center gap-4 items-center pt-3 text-[24px]">
                                    <RiLinkedinBoxFill/>
                                    <RiTwitterFill/>
                                    <LiaBasketballBallSolid/>
                                </div>
                            </div>




                        </div>







                        <div className="w-[394.67px] h-[209px] bg-lightwhite flex-col  text-black justify-between items-center">

                            {/* small box 5 */}

                            {/* small box 1 */}

                            <div className="w-full flex justify-center items-center mb-7">
                                    <div className="w-[80px] h-[80px]"><Image src={Boy3} alt="boy3"/></div>
                                </div>

                            <div className=" flex flex-col justify-center items-center ">
                               
                                <h1 className="text-[20px] font-[600]">Stephen Kerubou</h1>
                                <h1 className="text-[18px] font-[400] ">President of Sales</h1>
                                 <div className="flex justify-center gap-4 items-center pt-3 text-[24px]">
                                    <RiLinkedinBoxFill/>
                                    <RiTwitterFill/>
                                    <LiaBasketballBallSolid/>
                                </div>
                            </div>






                        </div>
                        <div className="w-[394.67px] h-[209px] bg-lightwhite flex-col  text-black justify-between items-center">
                            {/* small box 6 */}
                            




                            {/* small box 1 */}

                            <div className="w-full flex justify-center items-center mb-7">
                                    <div className="w-[80px] h-[80px]"><Image src={Women3} alt="women3"/></div>
                                </div>

                            <div className=" flex flex-col justify-center items-center ">
                               
                                <h1 className="text-[20px] font-[600]">John Leboo</h1>
                                <h1 className="text-[18px] font-[400] ">Dog Trainer</h1>
                                 <div className="flex justify-center gap-4 items-center pt-3 text-[24px]">
                                    <RiLinkedinBoxFill/>
                                    <RiTwitterFill/>
                                    <LiaBasketballBallSolid/>
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

export default Team