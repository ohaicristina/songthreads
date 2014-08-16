//= require jquery
//= require_tree


if(!window.Lyric){
  Lyric = {};
}

Lyric.Selector = {};
Lyric.Selector.getSelected = function(){
  var t = '';
  if(window.getSelection){
    t = window.getSelection();
  }else if(document.getSelection){
    t = document.getSelection();
  }else if(document.selection){
    t = document.selection.createRange().text;
  }
  return t;
}

$(document).ready(function(){
  $("input").on({
    change: function() {
      searchTerms = $(this).val();
      getLyrics();
    }
  });
  $(document).bind("mouseup", function() {
    var lyric = Lyric.Selector.getSelected();
    if(lyric!='') {
      $('#target').text("You selected:\n"+lyric);
    }
    $(".toggle-style-buttons").addClass("display-toggle");
  });
  $("#sans-serif").click(function() {
    $("#target").addClass("sans-serif").removeClass("serif");
  });
  $("#serif").click(function() {
    $("#target").addClass("serif").removeClass("sans-serif");
  });
});

