import Image from "next/image";
import Logo from "@/public/mvut_logo.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Image src={Logo} alt="MVUT Logo" height={400}/>
    <p className="text-5xl">Launching Soon ...</p>
    </main>
  );
}
