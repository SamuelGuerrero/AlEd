"use client";
import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import { UserCard } from "@/components/UserCard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any>();

  const router = useRouter()

  useEffect(() => {
    fetch("https://aled-server.onrender.com/api/users")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response abovex
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <NavBar />
      <section className="container flex flex-col items-center pt-6 pb-6 mt-24 mx-auto rounded shadow-sm shadow-black space-y-8">
        <Button onClick={() => router.push('/create')} variant="tertiary">
            Agregar usuario
        </Button>
        {users
          ? users.map((professional: any) => (
              <UserCard
                id={professional._id}
                key={professional._id}
                name={professional.name}
                profession={professional.profession}
                urlImage={professional.urlImage}
                age={professional.age}
                nationality={professional.nationality}
                height={professional.height}
                telephoneNumber={professional.telephoneNumber}
                facebook={professional.facebook}
                twitter={professional.twitter}
                github={professional.github}
              />
            ))
          : undefined}
      </section>
    </div>
  );
}