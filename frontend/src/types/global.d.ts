/* Glogal Types */

interface Song {
  _id: string;
  title: string;
  artist: string;
  genre: string;
  album: string;
}

interface NewSong {
  title: string;
  artist: string;
  genre: string;
  album: string;
}

interface Songs {
  songs: Song[];
  artists: Artist[];
  albums: Album[];
  genres: Genre[];
}

interface Artist {
  artist: string;
  albums: string[];
  songs: Song[];
}

interface Album {
  album: string;
  artist: string;
  songs: Song[];
}

interface Genre {
  genre: string;
  songs: Song[];
}

interface Response {
  data: Song[];
}

interface Status {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: String;
}

interface RootState {
  song: {
    songs: Song[];
    artists: Artist[];
    albums: Album[];
    genres: Genre[];
    status: Status;
    songForAction: Song[];
  };
}
