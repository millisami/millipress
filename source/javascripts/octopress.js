$(document).ready(function(){
    var url = "http://twitter.com/status/user_timeline/"+ twitter_user +".json?count=" + tweet_count + "&callback=?";
    $.getJSON(url, function(data){
        $('#twitter_loading').css("display", "none");
        $.each(data, function(i, item) {
            $('ul#twitter_status').append('<li>' + linkify(item.text) + ' <span class="meta"><a href="http://twitter.com/'+ twitter_user +'/'+ item.id+'">' + relative_time(item.created_at) + '</a></span></li>');
        });
    });
});
    
function linkify(text) {
	//courtesy of Jeremy Parrish (rrish.org)
	return text.replace(/(https?:\/\/[\w\-:;?&=+.%#\/]+)/gi,'<a href="$1">$1</a>').replace(/(^|\s)@(\w+)/g,'$1<a class="user" href="http://twitter.com/$2">@$2</a>').replace(/(^|\s)#(\w+)/g,'$1<a class="topic" href="http://search.twitter.com/search?q=%23$2">#$2</a>');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);
  
  var r = '';
  if (delta < 60) {
    r = 'a minute ago';
  } else if(delta < 120) {
    r = 'couple of minutes ago';
  } else if(delta < (45*60)) {
    r = (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (90*60)) {
    r = 'an hour ago';
  } else if(delta < (24*60*60)) {
    r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    r = '1 day ago';
  } else {
    r = (parseInt(delta / 86400)).toString() + ' days ago';
  }
  
  return r;
}

