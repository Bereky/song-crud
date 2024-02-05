import Button from "./Button";

const LeftSidebar = () => {
  return (
    <div className="w-64 h-full bg-zinc-800 text-emerald-600 flex justify-center items-center p-3 pt-5">
      <div className="w-full h-full flex flex-col justify-start items-center p-2">
        <Button name={"All Songs"} link={""} path={"/"} />
        <Button name={"Artists"} link={"artists"} path={"/artists"} />
        <Button name={"Albums"} link={"albums"} path={"/albums"} />
        <Button name={"Genres"} link={"genres"} path={"/genres"} />
      </div>
    </div>
  );
};

export default LeftSidebar;
