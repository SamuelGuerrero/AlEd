import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import ToastAnnouncement from "./ToastAnnouncement";
import { useState } from "react";

type EditUserCardType = {
  id: string ;
  name: string;
  profession: string;
  urlImage: string;
  age: number | string;
  nationality: string;
  height: string;
  telephoneNumber: string;
  facebook: string;
  twitter: string;
  github: string;
};

export const EditUserCard = (props: EditUserCardType) => {
  const {
    id,
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  return (
    <div className="bg-white w-1/2 border mb-5 rounded shadow-md">
      <div className="p-20">
        <h1 className="text-black text-5xl font-medium">Editar usuario</h1>
        <div className="w-full flex justify-start">
          <form
            className="mt-10 w-full"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              console.log(id)
              fetch(`https://aled-server.onrender.com/api/users/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .catch((error) => console.error("Error:", error))
                .then((response) => console.log("Success:", response));

              setTimeout(() => {
                router.push("/users");
              }, 3000);
            })}
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-7">
              <Input
                defaultValue={name}
                register={register}
                registerName="name"
                inputName="Nombre"
              />
              <Input
                defaultValue={profession}
                register={register}
                registerName="profession"
                inputName="Puesto"
              />
              <Input
                defaultValue={age}
                type="number"
                register={register}
                registerName="age"
                inputName="Edad"
              />
              <Input
                defaultValue={nationality}
                register={register}
                registerName="nationality"
                inputName="Nacionalidad"
              />
              <Input
                defaultValue={height}
                register={register}
                registerName="height"
                inputName="Altura"
              />
              <Input
                defaultValue={telephoneNumber}
                register={register}
                registerName="telephoneNumber"
                inputName="Número telefónico"
              />
              <Input
                defaultValue={facebook}
                register={register}
                registerName="facebook"
                inputName="Facebook"
                description="(nombre de perfil)"
              />
              <Input
                defaultValue={twitter}
                register={register}
                registerName="twitter"
                inputName="Twitter"
                description="(nombre de usuario)"
              />
              <Input
                defaultValue={github}
                register={register}
                registerName="github"
                inputName="GitHub"
                description="(nombre de usuario)"
              />
              <Input
                defaultValue={urlImage}
                register={register}
                registerName="urlImage"
                inputName="Url de la imagen"
              />
            </div>
            <ToastAnnouncement buttonLegend="Modificar usuario" message="¡Usuario editado con éxito!" />
          </form>
        </div>
      </div>
    </div>
  );
};
