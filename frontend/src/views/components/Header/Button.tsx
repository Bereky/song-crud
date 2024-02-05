interface ChildProps {
  onClickCB: (value: boolean) => boolean;
}

const Button = ({ onClickCB }: ChildProps) => {
  return (
    <div className="w-52 h-full bg-slate-00 flex justify-center items-center absolute right-0 p-5 mr-3">
      <button
        onClick={() => onClickCB(true)}
        className="w-48 h-full outline outline-emerald-600 hover:outline-emerald-500 hover:bg-emerald-500 hover:text-zinc-200 text-emerald-500 duration-300 rounded-md"
      >
        Add Song
      </button>
    </div>
  );
};

export default Button;
