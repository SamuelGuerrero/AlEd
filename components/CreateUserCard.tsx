import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRouter } from "next/navigation";

export const CreateUserCard = () => {
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
        <h1 className="text-black text-5xl font-medium">Crear usuario</h1>
        <div className="w-full flex justify-start">
          <form
            className="mt-10 w-full"
            onSubmit={handleSubmit((data) => {
              console.log(data);

              fetch("https://aled-server.onrender.com/api/users", {
                method: "POST",
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
              }, 1000);
            })}
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-7">
              <Input
                register={register}
                registerName="name"
                inputName="Nombre"
              />
              <Input
                register={register}
                registerName="profession"
                inputName="Puesto"
              />
              <Input
                type="number"
                register={register}
                registerName="age"
                inputName="Edad"
              />
              <Input
                register={register}
                registerName="nationality"
                inputName="Nacionalidad"
              />
              <Input
                register={register}
                registerName="height"
                inputName="Altura"
              />
              <Input
                register={register}
                registerName="telephoneNumber"
                inputName="Número telefónico"
              />
              <Input
                register={register}
                registerName="facebook"
                inputName="Facebook"
                description="(nombre de perfil)"
              />
              <Input
                register={register}
                registerName="twitter"
                inputName="Twitter"
                description="(nombre de usuario)"
              />
              <Input
                register={register}
                registerName="github"
                inputName="GitHub"
                description="(nombre de usuario)"
              />
              <Input
                register={register}
                registerName="urlImage"
                inputName="Url de la imagen"
              />
            </div>
            <Button type="submit" variant="principal">
              Crear usuario
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
