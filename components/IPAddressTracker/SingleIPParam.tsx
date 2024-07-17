type Props = {
  title: string;
  value: string;
};

const SingleIPParam = ({ title, value }: Props) => {
  return (
    <div className=" flex flex-col items-center sm:items-start gap-2 xl:w-[175px] sm:pb-4">
      <p className="text-dark-gray text-xs font-bold tracking-widest">{title}</p>
      <p className="text-black font-medium text-lg">{value}</p>
    </div>
  );
};

export default SingleIPParam;
