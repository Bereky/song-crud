import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface ChildProps {
  onClickCB: (value: boolean) => boolean;
}

const AddSongModal = ({ onClickCB }: ChildProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data: object) => {
    dispatch({ type: "song/addSongPending", payload: data });
    onClickCB(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none duration-300">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-700 rounded-t">
              <h3 className="text-3xl font-semibold text-emerald-500">
                Add Song
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto w-96 px-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm  text-emerald-500 font-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-zinc-800 border border-emerald-500 text-zinc-200 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-red-400 text-sm">
                      * This field is required.
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm  text-emerald-500 font-semibold">
                    Artist
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-zinc-800 border border-emerald-500 text-zinc-200 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    {...register("artist", { required: true })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm  text-emerald-500 font-semibold">
                    Album
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="bg-zinc-800 border border-emerald-500 text-zinc-200 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                    {...register("album", { required: true })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm  text-emerald-500 font-semibold">
                    Genre
                  </label>

                  <select
                    {...register("genre")}
                    className="bg-zinc-800 border border-emerald-500 text-emerald-500 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 "
                  >
                    <option value="jazz"> Jazz </option>
                    <option value="pop"> Pop</option>
                    <option value="emeralds"> emeralds</option>
                    <option value="reggae"> Reggae</option>
                    <option value="indie"> Indie</option>
                    <option value="soul"> Soul </option>
                    <option value="country"> Country</option>
                    <option value="rock"> Rock </option>
                    <option value="house">House</option>
                  </select>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end pt-3 border-t border-solid border-zinc-700 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onClickCB(false)}
                  >
                    Close
                  </button>
                  <button
                    className="btn w-24 text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                    type="submit"
                    // onClick={onClickCB}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default AddSongModal;
