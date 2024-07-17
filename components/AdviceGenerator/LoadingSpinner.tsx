type Props = {
  color?: "neon-green" | "royale-blue";
  size?: "small" | "medium";
};

const LoadingSpinner = ({ color = "neon-green", size = "small" }: Props) => {
  const colorVariants = {
    "neon-green": "border-neon-green",
    "royale-blue": "border-[#1d4ed8]",
  };

  const sizeVariants = {
    small: "w-10 h-10",
    medium: "w-20 h-20",
  };

  return <div className={`${sizeVariants[size]} border-2 rounded-full animate-spin ${colorVariants[color]} border-t-transparent`}></div>;
};

export default LoadingSpinner;
