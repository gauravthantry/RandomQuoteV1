$(document).ready(function() {
  var content="";
  var quoteContent='';
  var quoteAuthor='';
    $.getJSON("//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(key) {
      quoteContent=key[0].content;
      quoteAuthor=key[0].title;
      quoteContent=quoteContent.replace("<p>","");
      quoteContent=quoteContent.replace("</p>","");
     content=quoteContent + "<p>— " + quoteAuthor + "</p>";
     
      $("#quote-form").append(content);
      
   $("#tweet-prop").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent('"'+quoteContent+'"'+'-'+quoteAuthor));
    });
    $("#quote-form").css({"font-family":"lucida console", "font-size": "20px","color":"rgb(255,255,150)"});
  
  $("#click").click(function() {
    $("#quote-form").fadeOut();
    $.getJSON("//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(key) {
      quoteContent=key[0].content;
      quoteAuthor=key[0].title;
     content=quoteContent + "<p>— " + quoteAuthor + "</p>";
      
      $("#quote-form").html(content);
    $("#quote-form").fadeIn();
     $("#tweet-prop").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ encodeURIComponent('"'+quoteContent+'"'+'-'+quoteAuthor));
    });
    $("#quote-form").css({"font-family":"lucida console", "font-size": "20px","color":"rgb(255,255,150)"});
    
  }); 
});
