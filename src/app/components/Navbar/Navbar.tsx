
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"














import pic from "../../../../images/Ddsgnr Themes@2x.png"
import { LuMenu } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-[72px] flex justify-between items-center fixed top-0 bg-lightwhite">
      <div className="ml-[40px]">
        <Image src={pic} alt="design" />

      </div>
      <ul className="hidden lg:block lg:flex gap-[32px]">
      <Link href={"/"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Home</li></Link>
      <Link href={"#Courses"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]"  >Courses</li></Link>
      <Link href={"#Services"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Services</li></Link>
      <Link href={"#Achivement"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Achievement</li></Link>
      <Link href={"#About"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >About Us</li></Link>
      <Link href={"#Testimonial"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Testimonial</li></Link>
      </ul>


      <div className="hidden lg:block flex mr-[40px] ">
        <button className="mr-3 border border-black w-[95px] h-[40px] rounded-[5px] bg-transparent hover:bg-black hover:text-white transition-all duration-[0.5s]">Login</button>
        <button className="mr-3 border border-black w-[95px] h-[40px] rounded-[5px] bg-black hover:bg-transparent text-white hover:text-black transition-all duration-[0.5s]">Sign Up</button>
      </div>

      <div className="block lg:hidden mr-[25px] text-[30px]">





        <Sheet>
          <SheetTrigger><LuMenu/></SheetTrigger>
          <SheetContent>

          <div className="">
              <Image src={pic} alt="design" />

           </div>
         <ul className="flex flex-col justify-center items-center gap-[32px] h-[70%]">
            <Link href={"/"}> <li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Home</li></Link>
             <Link href={"#Courses"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]"  >Courses</li></Link>
             <Link href={"#Services"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Services</li></Link>
             <Link href={"#Achivement"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Achievement</li></Link>
             <Link href={"#About"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >About Us</li></Link>
             <Link href={"#Testimonial"}><li className="hover:text-orange-600 cursor-pointer  transition-all duration-[0.5s]" >Testimonial</li></Link>
         </ul>


                    <div className=" flex flex-col gap-5 justify-center items-center">
                        <button className="mr-3 border border-black w-[120px] h-[40px] rounded-[5px] bg-transparent hover:bg-black hover:text-white transition-all duration-[0.5s]">Login</button>
                        <button className="mr-3 border border-black w-[120px] h-[40px] rounded-[5px] bg-black hover:bg-transparent text-white hover:text-black transition-all duration-[0.5s]">Sign Up</button>
                    </div>












            
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader> */}

          </SheetContent>
        </Sheet>













      </div>

    </div>
  )
}
