import { NavBar } from "@/components/NavBar";
import { UserCard } from "@/components/UserCard";
import React from "react";

const data = [
  {
    id: "1",
    name: "Emma Proulx",
    profession: "Visual Designer",
    urlImage: "https://i.postimg.cc/25nkBqxG/Emma.jpg",
  },
  {
    id: "2",
    name: "Kevin Parker",
    profession: "Singer",
    urlImage: "https://i.postimg.cc/8Cc7X7SQ/Kevin.webp",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <NavBar toolSelected="Aled" />
      <section className="container flex flex-col items-center pt-6 pb-6 mt-24 mx-auto bg-slate-200 rounded-md shadow-sm shadow-black space-y-8">
        {data.map((element) => (
          <UserCard
            name={element.name}
            profession={element.profession}
            urlImage={element.urlImage}
          />
        ))}
      </section>
    </div>
  );
}
