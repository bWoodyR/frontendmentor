type Props = {
  title: string;
  value: string;
};

const SingleIPParam = ({ title, value }: Props) => {
  return (
    <div className=" flex flex-col items-center sm:items-start gap-2 xl:w-[175px] sm:pb-4">
      <h5 className="text-dark-gray text-xs font-bold tracking-widest">{title}</h5>
      <h2 className="text-black font-medium text-lg">{value}</h2>
    </div>
  );
};

export default SingleIPParam;
