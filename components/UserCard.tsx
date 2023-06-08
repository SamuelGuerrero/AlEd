import Image from "next/image";
import { Button } from "./Button";

type UseCardProps = {
  name: string;
  profession: string;
  urlImage: string;
};

export const UserCard = (props: UseCardProps) => {
  const { name, profession, urlImage } = props;

  return (
    <div className="w-full flex justify-center max-w-xl bg-slate-800 border border-gray-200 rounded-lg shadow-yellow-600">
      <div className="flex flex-col mt-10 items-center">
        <Image
          className="rounded-full"
          src={urlImage}
          width={230}
          height={230}
          alt="Emma"
        />
        <h1 className="text-3xl font-medium text-[#c0885d] mt-4">
          {name}
        </h1>
        <h1 className=" text-2xl font-thin mb-1">{profession}</h1>
        <div className="w-full flex justify-between">
          <Button variant="secondary">Ver</Button>
          <Button variant="secondary">Editar</Button>
        </div>
      </div>
    </div>
  );
};
