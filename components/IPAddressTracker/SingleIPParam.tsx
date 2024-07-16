type Props = {
    title:string
  value: string;
};

const SingleIPParam = ({ title, value }: Props) => {
  return (
    <div className=" flex flex-col gap-2 pr-4">
      <h3 className="text-dark-gray text-xs font-bold tracking-widest">{title}</h3>
      <h2 className="text-black font-medium text-lg">{value}</h2>
    </div>
  );
};

export default SingleIPParam;
