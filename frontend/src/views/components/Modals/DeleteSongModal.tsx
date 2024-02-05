import { useDispatch, useSelector } from "react-redux";

interface Song {
  _id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
}

interface RootState {
  song: {
    songs: Song[];
    status: String[];
    songForAction: Song[];
  };
}

interface ChildProps {
  message: boolean;
  onClickCB: () => void;
}

const DeleteSongModal = ({ message, onClickCB }: ChildProps) => {
  const { songForAction } = useSelector((state: RootState) => state.song);

  const dispatch = useDispatch();

  const onDelete = () => {
    const songId = songForAction[0]._id;

    dispatch({ type: "song/deleteSongPending", payload: songId });
  };

  return (
    <>
      {message ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-700 rounded-t">
                  <h3 className="text-3xl text-red-500 font-semibold">
                    Delete Song{" "}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-96 px-10">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure do you want to delete this song?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-4 border-t border-solid border-zinc-700 rounded-b">
                  <button
                    className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClickCB}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn w-24 text-white bg-red-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
                    type="button"
                    onClick={onDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default DeleteSongModal;
