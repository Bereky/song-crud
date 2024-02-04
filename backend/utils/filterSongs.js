const filterSongs = (allSongs) => {
  const artists = [];

  // Categorize by albums
  const albums = [];

  // Categorize by genres
  const genres = [];

  if (allSongs) {
    allSongs.forEach((song) => {
      const { artist, album } = song;
      let artistEntry = artists.find((entry) => entry.artist === artist);

      if (!artistEntry) {
        artistEntry = { artist, songs: [], albums: [] };
        artists.push(artistEntry);
      }

      artistEntry.songs.push(song);

      if (!artistEntry.albums.includes(album)) {
        artistEntry.albums.push(album);
      }
    });

    allSongs.forEach((song) => {
      const { artist, album } = song;

      let albumEntry = albums.find((entry) => entry.album === album);

      if (!albumEntry) {
        albumEntry = { album, artist, songs: [] };
        albums.push(albumEntry);
      }

      albumEntry.songs.push(song);
    });

    allSongs.forEach((song) => {
      const { genre, title, album, artist } = song;

      let genreEntry = genres.find((entry) => entry.genre === genre);

      if (!genreEntry) {
        genreEntry = { genre, songs: [] };
        genres.push(genreEntry);
      }

      genreEntry.songs.push({ title, album, artist });
    });
  } else {
    return false;
  }

  return { artists, albums, genres };
};

module.exports = { filterSongs };
