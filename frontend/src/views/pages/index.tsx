import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RighSidebar from "../components/Sidebar/RightSidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "song/fetchSongPending" });
  }, [dispatch]);

  return (
    <div className="w-full h-screen flex flex-row justify-start items-start absolute top-0 pt-20 bg-zinc-900">
      <LeftSidebar />
      <div className="w-auto h-full  flex justify-start items-start pt-8 p-4 overflow-auto ">
        <Outlet />
      </div>
      <RighSidebar />
    </div>
  );
};

export default Body;
