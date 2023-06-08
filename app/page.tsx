"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col lg:flex-row lg:min-h-screen h-screen bg-white">
      <section className="lg:w-1/2 lg:h-screen w-full h-1/2 bg-black flex">
        <div className="mx-auto my-auto flex justify-center">
          <Image
            className="rounded-md lg:w-[600px] sm:w-[400px] w-[calc(100%-2rem)] shadow-yellow-600 shadow-2xl"
            src={"/AlEd.png"}
            alt="AlEd Logo"
            width={600}
            height={400}
          />
        </div>
      </section>
      <section className="lg:w-1/2 lg:h-screen w-full h-1/2 flex bg-slate-100">
         <div className="mx-auto my-auto flex items-center">
          <div className="lg:w-3/4 w-10/12 mx-auto flex flex-col text-center">
            <h1 className="text-black font-akshar font-normal text-3xl sm:text-5xl lg:text-7xl lg:mb-24 sm:mb-10 mb-5">
              AlEd es una empresa con más de 5000 empleados en toda
              Latinoamérica
            </h1>
            <h1 className="text-black font-akshar font-normal text-xl sm:text-3xl lg:text-3xl mb-10">
              Gestiona los perfiles de los usuarios de AlEd
            </h1>
            <Button onClick={() => router.push("/users")} variant="principal">Ir</Button>
          </div>
        </div> 
      </section>
    </main>
  );
}
