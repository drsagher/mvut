'use client'
import Logo from "@/public/mvut_logo.png";
import Image from "next/image";

export default function NavComponent(){
return(
    <div className={'flex sm:w-full bg-gradient-to-r from-teal-500 to-teal-900'}>
        <div className={'flex flex-col sm:flex-row p-6 text-center sm:min-h-screen items-center justify-center sm:justify-between '}>
            <div className={'flex items-center justify-center sm:w-1/2 h-full'}>
                <Image src={Logo} alt="MVUT Logo" className={'h-52 w-52 sm:h-72 sm:w-72 md:h-96 md:w-96 hover:rotate-12'}/>
            </div>
            <p className={'flex items-center justify-center text-xl lg:leading-relaxed sm:text-2xl text-white sm:w-1/2 md:text-3xl lg:text-5xl h-full'}>
                Unlocking Potential through Quality Education, Logical Inquiry, Human Compassion, and Intelligent Innovation.
            </p>
        </div>
    </div>
)
}