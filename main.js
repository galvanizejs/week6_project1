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
				var firstName = states[i].name;
				$('#states').append("<h3>" + firstName + "</h3>");
			}
		}
	})
});
