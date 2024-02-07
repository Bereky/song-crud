import Header from "../components/Header/Header";
import Body from "../pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetStatus } from "../../app/songSlice";

const MainLayout = () => {
  const { isLoading, isSuccess, isError } = useSelector(
    (state: RootState) => state.song.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
    }

    if (isSuccess) {
      toast.success("Completed Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (isError) {
      toast.error("Error Occured!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    dispatch(resetStatus());
  }, [isLoading, isSuccess, isError]);

  return (
    <div className="relative">
      <Header />
      <Body />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MainLayout;
