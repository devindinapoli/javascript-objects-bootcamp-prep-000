var playlist = {
  artistName: "songTitle",
  
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist,{ [artistName]: songTitle })
}

function removeFromPlaylist(playlist, aristName){
 delete playlist[artistName];
  return playlist;
}