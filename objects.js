var playlist = { Queen: "Bicycle"}

function updatePlaylist(playlist, artistName, songTitle) {
  {[playlist]}.artistName = songTitle;
  return playlist;
}