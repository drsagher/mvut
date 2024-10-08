import Students from '@/public/resources/welcome.jpg';
import Image from "next/image";
import Link from "next/link";

export default function SloganPage(){
    return (
        <div className="flex flex-col md:flex-row md:p-4 py-16 bg-teal-900 w-full items-center justify-center">
            <div className={'flex items-center justify-center flex-col w-1/2 md:leading-relaxed '}>
                <p className={'text-xl leading-relaxed text-white md:text-5xl md:py-10'}> Admission open</p>
                   <Link href={''} className={'text-md bg-amber-500 text-white rounded-full uppercase hover:bg-teal-500 p-2'}>apply now</Link>
            </div>
            <div className={'hidden md:flex items-center justify-center w-1/2'}>
                <Image src={Students} alt={''} className={'md:h-96 md:w-auto shadow-amber-200 rounded-l-full border-l-4 border-r-2 border-amber-300 '}/>
            </div>
        </div>
    )
}