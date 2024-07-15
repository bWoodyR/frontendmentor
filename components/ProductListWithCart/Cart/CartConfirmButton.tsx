"use client";

type Props = {
  text: string;
  callback: () => void;
};

const CartConfirmButton = ({ text, callback }: Props) => {
  return (
    <button className="bg-[#c73a0f] w-full rounded-3xl mt-4 py-4 font-medium text-white hover:bg-[#78350f] transition-colors" onClick={() => callback()}>
      {text}
    </button>
  );
};

export default CartConfirmButton;
