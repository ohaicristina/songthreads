//Lyric API Shenanigans

function getLyrics() {
  apiString = "http://songthreads.ngrok.com/api/lyrics?q=" + searchTerms
  $.getJSON(apiString, function(data) {
    artists = data.artist;
    titles = data.title;
    lyrics = data.lyrics;
    $(".lyrics-p div").remove();

    $.each(lyrics.split(/\n/), function(i, lyrics) {
      $(".lyrics-p").append("<div>" + lyrics + "</div>");
    });
  });
}
