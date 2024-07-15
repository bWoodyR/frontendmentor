import { ActionToDo } from "@/types/DessertsType";
import { FaPlus, FaMinus } from "react-icons/fa6";

type Props = {
  handleDessertClick: (actionToDo: ActionToDo) => void;
  dessertCounnt: number;
};

const ButtonToChangeCount = ({ handleDessertClick, dessertCounnt }: Props) => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex gap-2 items-center text-rose900 font-semibold text-sm bg-dark-red px-4 py-2 rounded-3xl w-[155px]">
      <div className="flex justify-between items-center w-full ">
        <button className=" flex items-center outline outline-1 outline-white rounded-full p-1 w-4 h-4 hover:bg-white text-white hover:text-dark-red transition-colors" onClick={() => handleDessertClick("decrement")}>
          <FaMinus className="" />
        </button>
        <span className="text-white">{dessertCounnt}</span>
        <button className=" flex items-center outline outline-1 outline-white rounded-full p-1 w-4 h-4 hover:bg-white text-white hover:text-dark-red transition-colors" onClick={() => handleDessertClick("increment")}>
          <FaPlus className="" />
        </button>
      </div>
    </div>
  );
};

export default ButtonToChangeCount;
