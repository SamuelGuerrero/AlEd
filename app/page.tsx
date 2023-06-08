"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col md:flex-row md:min-h-screen h-screen bg-white">
      <section className="md:w-1/2 md:h-screen w-full h-1/2 bg-black flex">
        <div className="mx-auto my-auto flex justify-center">
          <Image
            className="rounded-md md:w-[600px] w-[calc(100%-2rem)] shadow-yellow-600 shadow-2xl"
            src={"/AlEd.png"}
            alt="AlEd Logo"
            width={600}
            height={400}
          />
        </div>
      </section>
      <section className="md:w-1/2 md:h-screen w-full h-1/2 flex bg-slate-100">
         <div className="mx-auto my-auto flex items-center">
          <div className="md:w-3/4 w-10/12 mx-auto flex flex-col text-center">
            <h1 className="text-black font-akshar font-normal text-3xl md:text-7xl md:mb-24 mb-5">
              AlEd es una empresa con más de 5000 empleados en toda
              Latinoamérica
            </h1>
            <h1 className="text-black font-akshar font-normal text-xl md:text-3xl mb-10">
              Gestiona los perfiles de los usuarios de AlEd
            </h1>
            <Button onClick={() => router.push("/users")} variant="principal">Ir</Button>
          </div>
        </div> 
      </section>
    </main>
  );
}
