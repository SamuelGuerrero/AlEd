import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

type DialogCardType = {
  idUser: string;
};

export const DialogCard = (props: DialogCardType) => {
  const router = useRouter();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="garbage" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-transparent/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <h1 className="text-black text-2xl">¿Seguro de borrar usuario?</h1>
          <div className="flex space-x-9">
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  fetch(
                    `https://aled-server.onrender.com/api/users/${props.idUser}`,
                    {
                      method: "DELETE",
                    }
                  )
                    .then((res) => res.json())
                    .catch((error) => console.error("Error:", error))
                    .then((response) => console.log("Success:", response));

                  setTimeout(() => {
                    router.push("/users");
                  }, 2000);
                }}
                className="bg-red-600 hover:bg-red-800 py-1 px-1 w-full rounded-md"
              >
                Aceptar
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="bg-blue-600 hover:bg-blue-800 py-1 px-1 w-full rounded-md">
                Cancelar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
