import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import { UserCard } from "@/components/UserCard";
import React from "react";

const data = [
  {
    id: "1",
    name: "Emma Proulx",
    profession: "Visual Designer",
    urlImage: "https://i.postimg.cc/25nkBqxG/Emma.jpg",
    age: 28,
    nationality: "Estadounidense",
    height: "1.68",
    telephoneNumber: "59-6823-2351",
    facebook: "Emma Proulx",
    twitter: "@menitrust",
    github: "Emma Proulx",
  },
  {
    id: "2",
    name: "Kevin Parker",
    profession: "Singer",
    urlImage: "https://i.postimg.cc/8Cc7X7SQ/Kevin.webp",
    age: 35,
    nationality: "Australiano",
    height: "1.74",
    telephoneNumber: "47-2614-7162",
    facebook: "Kevin Parker",
    twitter: "@tameimpala",
    github: "Kevin Parker",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <NavBar toolSelected="Aled" />
      <section className="container flex flex-col items-center pt-6 pb-6 mt-24 mx-auto rounded shadow-sm shadow-black space-y-8">
        <Button variant="secondary">Agregar</Button>
        {data.map((professional) => (
          <UserCard
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
        ))}
      </section>
    </div>
  );
}
