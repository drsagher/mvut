export default function ProgramComponent(){
    return (
        <div className="flex flex-col container mb-8 mx-auto py-16 items-center justify-center text-center">
            <p className="text-7xl text-indigo-900 font-bold">Services</p>
            <ul className={'flex flex-col md:flex-row text-3xl gap-8 pt-16 text-gray-50'}>
                <li className={'flex text-center items-center justify-center bg-indigo-900 p-4 rounded-full h-48 w-48 hover:bg-amber-600 transition-all'}>Business Solutions</li>
                <li className={'flex text-center items-center justify-center bg-indigo-900 p-4 rounded-full h-48 w-48 hover:bg-amber-600 transition-all'}>Research</li>
                <li className={'flex text-center items-center justify-center bg-indigo-900 p-4 rounded-full h-48 w-48 hover:bg-amber-600 transition-all'}>Career Building</li>
                <li className={'flex text-center items-center justify-center bg-indigo-900 p-4 rounded-full h-48 w-48 hover:bg-amber-600 transition-all'}>Internship</li>
                <li className={'flex text-center items-center justify-center bg-indigo-900 p-4 rounded-full h-48 w-48 hover:bg-amber-600 transition-all'}>Education</li>
            </ul>
        </div>
    )
}