import { useSelector } from "react-redux";

const Genres = () => {
  const { genres } = useSelector((state: RootState) => state.song);

  console.log(genres);

  return (
    <table className="min-w-full bg-zin-800 border-none text-zinc-200">
      <thead>
        <tr>
          <th className="py-1 px-1 w-5 text-start">#</th>
          <th className="py-2 px-4 w-56 text-start">Genre</th>
          <th className="py-2 px-4 w-48 text-start"># of Songs</th>
        </tr>
      </thead>
      <tbody>
        {genres &&
          genres.map((data, index) => {
            return (
              <tr>
                <td className="py-1 px-1 ">{index + 1}</td>
                <td className="py-2 px-4 ">{data && data.genre}</td>
                <td className="py-2 px-4 ">{data && data.songs.length}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default Genres;
