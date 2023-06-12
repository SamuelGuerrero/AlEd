import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { Button } from "./Button";

type ToastAnnouncementType = {
  buttonLegend: string;
  message: string;
};

const ToastAnnouncement = (props: ToastAnnouncementType) => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        type="submit"
        variant="principal"
      >
        {props.buttonLegend}
      </Button>

      <Toast.Root
        className="bg-white rounded-md shadow shadow-black p-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Description asChild>
          <div className="w-full flex justify-center">
            <h1 className="text-black text-xl font-medium">
              {props.message}
            </h1>
          </div>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-7 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

export default ToastAnnouncement;
