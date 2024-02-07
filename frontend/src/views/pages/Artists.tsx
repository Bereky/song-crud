import { useSelector } from "react-redux";

const Artists = () => {
  const { artists } = useSelector((state: RootState) => state.song);

  return (
    <table className="min-w-full bg-zin-800 border-none text-zinc-200">
      <thead>
        <tr>
          <th className="py-1 px-1 w-5 text-start">#</th>
          <th className="py-2 px-4 w-56 text-start">Artist</th>
          <th className="py-2 px-4 w-48 text-start"># of Songs</th>
          <th className="py-2 px-4 w-36 text-start"># of Albums</th>
        </tr>
      </thead>
      <tbody>
        {artists &&
          artists.map((data, index) => {
            return (
              <tr key={index}>
                <td className="py-1 px-1 ">{index + 1}</td>
                <td className="py-2 px-4 ">{data.artist}</td>
                <td className="py-2 px-4 ">{data.songs.length}</td>
                <td className="py-2 px-4 ">{data.albums.length}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Artists;
