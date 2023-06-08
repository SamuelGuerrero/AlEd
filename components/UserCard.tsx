import Image from "next/image";
import { Button } from "./Button";

type UseCardProps = {
  name: string;
  profession: string;
  urlImage: string;
  age: number;
  nationality: string;
  height: string;
  telephoneNumber: string;
  facebook: string;
  twitter: string;
  github: string;
};

export const UserCard = (props: UseCardProps) => {
  const {
    name,
    profession,
    urlImage,
    age,
    nationality,
    height,
    telephoneNumber,
    facebook,
    twitter,
    github,
  } = props;

  return (
    <div className="w-full flex justify-center max-w-xl bg-black border border-gray-200 rounded-lg shadow-yellow-600 shadow-lg drop-shadow-2xl">
      <div className="flex flex-col mt-10 items-center w-4/5">
        <div className="flex w-full justify-between">
          <Button variant="edit" />
          <Button variant="garbage" />
        </div>
        <Image
          className="rounded-full shadow-white shadow"
          src={urlImage}
          width={230}
          height={230}
          alt="Emma"
        />
        <h1 className="text-3xl font-medium text-[#c0885d] mt-4">{name}</h1>
        <h1 className=" text-2xl font-thin mb-1">{profession}</h1>
        <div className="mb-5 w-4/5 mt-5">
          <div className="flex justify-between">
            <h1>Edad: </h1>
            <span className="text-[#c0885d]">{age}</span>
          </div>

          <div className="flex justify-between">
            <h1>Nacionalidad: </h1>
            <span className="text-[#c0885d]">{nationality}</span>
          </div>

          <div className="flex justify-between">
            <h1>Altura: </h1>
            <span className="text-[#c0885d]">{height}</span>
          </div>

          <div className="flex justify-between">
            <h1>Número telefónico: </h1>
            <span className="text-[#c0885d]">{telephoneNumber}</span>
          </div>
        </div>

        <div>
          <Button variant="facebook">{facebook}</Button>
          <Button variant="twitter">{twitter}</Button>
          <Button variant="github">{github}</Button>
        </div>
      </div>
    </div>
  );
};
