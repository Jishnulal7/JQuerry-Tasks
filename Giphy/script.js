$(document).ready(function() {
	$('#search-form').submit(function(event) {
		event.preventDefault(); // prevent the form from submitting normally

		// get the user's search query
		var query = $('#search-input').val();

		// make the API call
		$.ajax({
			url: 'http://api.giphy.com/v1/gifs/search',
			type: 'GET',
			data: {
				api_key: 'l41X9LgzaDloJgjcWKH7LrGnLTlStYne',
				q: query,
				rating: 'g'
			},
			success: function(response) {
				// display the gifs in the container
				var gifContainer = $('#gif-container');
				gifContainer.empty(); // clear the container first

				response.data.forEach(function(gif) {
					var img = $('<img>');
					img.attr('src', gif.images.fixed_height.url);
					gifContainer.append(img);
				});
			},
			error: function() {
				alert('Error: Unable to retrieve gifs.');
			}
		});
	});
});
