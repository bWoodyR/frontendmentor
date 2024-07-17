type Props = {
  title: string;
  value: string;
};

const SingleIPParam = ({ title, value }: Props) => {
  return (
    <div className=" flex flex-col items-center sm:items-stretch gap-2 xl:w-[175px]">
      <p className="text-dark-gray text-xs font-bold tracking-widest">{title}</p>
      <p className="text-black font-medium text-lg">{value}</p>
    </div>
  );
};

export default SingleIPParam;
