// This code makes a GET request and returns data about five states.
// We've put the name of the state on the page already.
// Try adding the capital, state bird, how long the state has been in the union,
// and displaying the state flag for each state on the page.

$(document).ready(function(){

	$.ajax({
		url: 'https://api.myjson.com/bins/274f8',
		type: 'GET',
		data: {
			format: 'json'
		},
		error: function(){
			alert('An error has occurred');
		},
		success: function(results){
			var states = results.data;
			for(i=0; i < states.length; i++) {
				var name = states[i].name;
				$('#states').append("<h3>" + name + "</h3>");
			}
		}
	})

	function clickPic(){
		$("body").on('click', 'img', function(){
			var stateName = $(this).closest('div').attr("id")
			console.log(stateName)
			$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
				{
					api_key: "4bc9fb038f6eaa557f946ead1eef1bd5",
					tags: "sunset, " + stateName,
					format: "json"
				},
				function(data) {
					console.log(data.items)
					console.log("img#" + stateName)
			});
		});
	}
	clickPic();
});
