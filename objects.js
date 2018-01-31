var playlist = {
  artist: "songTitle",
  
}

function updatePlaylist(playlist, artist, songTitle){
  return Object.assign({}, playlist,{ [artist]: songTitle })
}

function removeFromPlaylist(playlist, arist){
 delete playlist.artist;
  
}