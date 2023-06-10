"use client";
import { CreateUserCard } from "@/components/CreateUserCard";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <NavBar />
      <div className="w-full flex justify-center mt-24">
        <CreateUserCard />
      </div>
    </div>
  );
}
