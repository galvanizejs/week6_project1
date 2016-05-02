$(document).ready(function(){

	$.ajax({
		url: 'https://api.myjson.com/bins/1kmxk',
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
				var cap = states[i].capital;
				$('#states').append("<h3>" + firstName + "</h3>");
			}
		}
	})
});
