import { useLocation } from "react-router-dom";
import Button from "./Button";
import AddSongModal from "../Modals/AddSongModal";
import { useState } from "react";

const Header = ({}) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = (value: boolean) => {
    setShowModal(value);
    return value;
  };

  return (
    <>
      {showModal && <AddSongModal onClickCB={onClickHandler} />}

      <div className="w-full h-20 bg-zinc-800 text-emerald-600 flex flex-row justify-start items-center absolute z-20 right-0 border-b-2 border-zinc-700">
        <div className="w-64 h-full bg-slate-00 flex justify-start items-center ml-3 px-5">
          <h1 className="text-4xl font-extrabold">MuziQa</h1>
        </div>

        <div className="w-64 h-full flex justify-start items-center p-0">
          {location.pathname === "/" && (
            <h1 className="text-xl font-bold"> All Songs</h1>
          )}
          {location.pathname === "/artists" && (
            <h1 className="text-xl font-bold"> Artists</h1>
          )}
          {location.pathname === "/albums" && (
            <h1 className="text-xl font-bold"> Albums</h1>
          )}
          {location.pathname === "/genres" && (
            <h1 className="text-xl font-bold"> Genres</h1>
          )}
        </div>
        <Button onClickCB={onClickHandler} />
      </div>
    </>
  );
};

export default Header;
