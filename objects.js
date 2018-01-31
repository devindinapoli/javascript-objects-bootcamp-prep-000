var playlist = {
  artist: "songTitle",
  
}

function updatePlaylist(playlist, artist, songTitle){
  return Object.assign({}, playlist,{ [artist]: songTitle })
}

function removeFromPlaylist(playlist, arist){
  return delete playlist.artist;
  
}