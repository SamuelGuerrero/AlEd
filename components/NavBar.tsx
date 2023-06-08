'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

type NavBarProps = {
  toolSelected: string;
};

export const NavBar = (props: NavBarProps) => {
  const { toolSelected } = props;
  const router = useRouter()

  return (
    <nav className="w-full h-20 fixed z-50 top-0 flex bg-black justify-center items-center shadow-md shadow-yellow-600">
        <Image
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
          src={"/AlEdLogo.png"}
          width={220}
          height={80}
          alt="AlEd Logo"
        />
    </nav>
  );
};
