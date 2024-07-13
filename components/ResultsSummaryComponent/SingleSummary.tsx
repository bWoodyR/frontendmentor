import Image from "next/image";

type Props = {
  category: string;
  icon: string;
  score: number;
  color: string
};

const SingleSummary = ({ category, icon, score, color }: Props) => {
  return (
    <div className="flex flex-row gap-16 items-center justify-between p-2 rounded-md text-sm" style={{ backgroundColor: `hsla(${color}, 0.1)`, color: `hsl(${color})` }}>
      <div className="flex gap-2 py-1">
        <Image src={icon} alt={`${category}-icon`} width={20} height={20}></Image>
        <p className="font-bold">{category}</p>
      </div>
      <p className="text-gray-500 text-sm">
        <span className="text-black font-bold">{score}</span> / 100
      </p>
    </div>
  );
};

export default SingleSummary;
