import { useSelector } from "react-redux";
import Stats from "./Stats";

const RighSidebar = () => {
  const { songs, artists, albums, genres } = useSelector(
    (state: RootState) => state.song
  );

  return (
    <div className="w-64 h-full min-h-96 bg-zinc-800 text-zinc-200 flex justify-center items-center fixed right-0 pt-2">
      <div className="w-full h-full bg-zinc-800 flex flex-col justify-start items-center pt-4 ">
        <Stats
          name="Songs"
          value={songs && songs.length && songs.length}
          icon={<i className="fas fa-music text-3xl pl-5" />}
        />

        <Stats
          name="Artists"
          value={artists && artists.length && artists.length}
          icon={<i className="fas fa-user text-3xl pl-5" />}
        />

        <Stats
          name="Albums"
          value={albums && albums.length && albums.length}
          icon={<i className="fas fa-compact-disc text-3xl pl-5" />}
        />

        <Stats
          name="Genres"
          value={genres && genres.length && genres.length}
          icon={<i className="fas fa-layer-group text-3xl pl-5" />}
        />
      </div>
    </div>
  );
};

export default RighSidebar;
