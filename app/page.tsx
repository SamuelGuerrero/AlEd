'use client'
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen bg-white">
      <section className="w-1/2 bg-black flex">
        <div className="mx-auto my-auto">
          <Image
            className="rounded-md shadow-yellow-600 shadow-2xl"
            src={"/AlEd.png"}
            alt="AlEd Logo"
            width={600}
            height={400}
          />
        </div>
      </section>
      <section className="w-1/2 flex bg-slate-100">
        <div className="mx-auto my-auto flex items-center">
          <div className="w-3/4 mx-auto flex flex-col text-center">
            <h1 className="text-black font-akshar font-normal text-7xl mb-24">
              AlEd es una empresa con más de 5000 empleados en toda
              Latinoamérica
            </h1>
            <h1 className="text-black font-akshar font-normal text-3xl mb-10">
              Gestiona los perfiles de los usuarios de AlEd
            </h1>
            <Button onClick={() => router.push("/users")} variant="principal">Ir</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
