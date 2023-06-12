"use client";
import { EditUserCard } from "@/components/EditUserCard";
import { NavBar } from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];
    setUserId(id);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <NavBar />
      <div className="w-full flex justify-center mt-24">
        {/* <h1 className="text-black">{userData}</h1> */}
        <EditUserCard id={userId} />
      </div>
    </div>
  );
}
