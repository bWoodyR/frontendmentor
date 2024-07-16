import Image from "next/image";
import { useFormStatus } from "react-dom";

const AdviceSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-neon-green rounded-full w-[60px] h-[60px] flex items-center justify-center transition-all hover:cursor-pointer hover:shadow-neon-spread "
    >
      <div>
        <Image src={"/assets/images/advice-generator/icon-dice.svg"} alt="dice-icon" width={25} height={25}></Image>
      </div>
    </button>
  );
};

export default AdviceSubmitButton;
