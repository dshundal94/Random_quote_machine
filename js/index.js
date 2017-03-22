/*Using Ajax to read quotes from forismatic api, need to put cache to false to generate random quotes repeatedly. The randomize button when pressed fetches a response from the API and displays the quote. The tweet button captures the quotes and open up a window to tweet the quote*/

function randomQuote() {
$.ajax({
  cache: false,
  dataType: "json",
  url: "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
  success: function(response) {
    $("#post_here").html("<div id = 'post_here'>" + response.quoteText); + $("#author").html("<div id = 'author'>" + "&dash;" + response.quoteAuthor + " &dash;</p>");
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');  
  }
});
}