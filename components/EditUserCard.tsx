import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import ToastAnnouncement from "./ToastAnnouncement";
import { useEffect, useState } from "react";

type EditUserCardType = {
  id: string;
};

export const EditUserCard = (props: EditUserCardType) => {
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
  });

  useEffect(() => {
    const url = window.location.href;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];
    fetch(`https://aled-server.onrender.com/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const {
    register,
    handleSubmit,
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
              console.log(userData);
              fetch(`https://aled-server.onrender.com/api/users/${props.id}`, {
                method: "PUT",
                body: JSON.stringify(userData),
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
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.name = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.name}
                register={register}
                registerName="name"
                inputName="Nombre"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.profession = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.profession}
                register={register}
                registerName="profession"
                inputName="Puesto"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.age = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.age}
                type="number"
                register={register}
                registerName="age"
                inputName="Edad"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.nationality = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.nationality}
                register={register}
                registerName="nationality"
                inputName="Nacionalidad"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.height = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.height}
                register={register}
                registerName="height"
                inputName="Altura"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.telephoneNumber = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.telephoneNumber}
                register={register}
                registerName="telephoneNumber"
                inputName="Número telefónico"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.facebook = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.facebook}
                register={register}
                registerName="facebook"
                inputName="Facebook"
                description="(nombre de perfil)"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.twitter = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.twitter}
                register={register}
                registerName="twitter"
                inputName="Twitter"
                description="(nombre de usuario)"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.github = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.github}
                register={register}
                registerName="github"
                inputName="GitHub"
                description="(nombre de usuario)"
              />
              <Input
                onChange={(e) => {
                  const newData = { ...userData };
                  newData.urlImage = e.target.value;
                  setUserData(newData);
                }}
                defaultValue={userData.urlImage}
                register={register}
                registerName="urlImage"
                inputName="Url de la imagen"
              />
            </div>
            <ToastAnnouncement
              buttonLegend="Modificar usuario"
              message="¡Usuario editado con éxito!"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
