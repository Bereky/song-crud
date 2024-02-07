import { useEffect, useState } from "react";
import UpdateSongModal from "../components/Modals/UpdateSongModal";
import DeleteSongModal from "../components/Modals/DeleteSongModal";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, setSongForAction } from "../../app/songSlice";

const Songs = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { songs } = useSelector((state: RootState) => state.song);
  const { isLoading, isSuccess, isError } = useSelector(
    (state: RootState) => state.song.status
  );
  const dispatch = useDispatch();

  const updateSongHandler = (_id: string) => {
    dispatch(setSongForAction(_id));
    setShowUpdateModal(true);
  };

  const deleteSongHandler = (_id: string) => {
    dispatch(setSongForAction(_id));
    setShowDeleteModal(true);
  };

  const onClickHandlerUpdate = () => {
    setShowUpdateModal(false);
  };

  const onClickHandlerDelete = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    if (isLoading) {
    }

    if (isSuccess) {
      setShowDeleteModal(false);
      setShowUpdateModal(false);
    }

    if (isError) {
    }

    dispatch(resetStatus());
  }, [isLoading, isSuccess, isError]);

  return (
    <>
      <UpdateSongModal
        message={showUpdateModal}
        onClickCB={onClickHandlerUpdate}
      />
      <DeleteSongModal
        message={showDeleteModal}
        onClickCB={onClickHandlerDelete}
      />

      <table className="min-w-full bg-zin-800 border-none text-zinc-200">
        <thead>
          <tr>
            <th className="py-1 px-1 w-5 text-start">#</th>
            <th className="py-2 px-4 w-40 text-start">Title</th>
            <th className="py-2 px-4 w-48 text-start">Artist</th>
            <th className="py-2 px-4 w-36 text-start">Album</th>
            <th className="py-2 px-4 w-24 text-start">Genre</th>
            <th className="py-2 px-4 w-32 text-start">Action</th>
          </tr>
        </thead>
        <tbody>
          {songs &&
            songs.map((song, index) => {
              return (
                <tr key={index}>
                  <td className="py-1 px-1 ">{(index += 1)}</td>
                  <td className="py-2 px-4 ">{song.title}</td>
                  <td className="py-2 px-4 ">{song.artist}</td>
                  <td className="py-2 px-4 ">{song.album}</td>
                  <td className="py-2 px-4 ">{song.genre}</td>
                  <td className="py-2 px-4 ">
                    <div className="flex justify-start items-center flex-row space-x-4">
                      <button
                        onClick={() => updateSongHandler(song._id)}
                        className="w-8 h-8 outline outline-slate-500 rounded-md hover:bg-slate-500"
                      >
                        <i className="fas fa-pen-to-square text-sm text-emerald-400"></i>
                      </button>
                      <button
                        onClick={() => deleteSongHandler(song._id)}
                        className="w-8 h-8 outline outline-slate-500 rounded-md text-center hover:bg-slate-500"
                      >
                        <i className="fas fa-trash text-sm text-red-500"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Songs;
