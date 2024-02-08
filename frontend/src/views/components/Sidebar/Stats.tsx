import { ReactNode } from "react";

interface StatProps {
  name: String;
  value: Number;
  icon: ReactNode;
}

const Stats = ({ name, value, icon }: StatProps) => {
  return (
    <div className="w-64 h-auto flex justify-center items-center py-2 ">
      <div className="w-48 h-20 rounded-md flex flex-row justify-between items-center space-x-2 px-6  bg-emerald-600">
        <h1 className="text-4xl font-bold">{value?.toString()}</h1>
        <h2 className="text-lg text-end">{name}</h2>
        <span>{icon}</span>
      </div>
    </div>
  );
};

export default Stats;
