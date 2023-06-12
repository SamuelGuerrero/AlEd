"use client";
import { EditUserCard } from "@/components/EditUserCard";
import { NavBar } from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
 const [userData, setUserData] = useState({
  name: "",
  profession: "",
  urlImage: "",
  age: "",
  nationality: "",
  height: "",
  telephoneNumber: "",
  facebook: "",
  twitter: "",
  github: "",
 })

 const [userId, setUserId] = useState<string>("")

  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];
    setUserId(id)
    fetch(`https://aled-server.onrender.com/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => setUserData(data));
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <NavBar />
      <div className="w-full flex justify-center mt-24">
        {/* <h1 className="text-black">{userData}</h1> */}
        <EditUserCard 
          id={userId}
          name={userData.name}
          profession={userData.profession}
          urlImage={userData.urlImage}
          age={userData.age}
          nationality={userData.nationality}
          height={userData.height}
          telephoneNumber={userData.telephoneNumber}
          facebook={userData.facebook}
          twitter={userData.twitter}
          github={userData.github}
        />
      </div>
    </div>
  );
}
