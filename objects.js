var playlist = {
  'artistName': "songTitle",
  
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle  }

function removeFromPlaylist(playlist, aristName){
 delete playlist[artistName]
  return playlist;
}