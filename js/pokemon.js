(function($) {

	var $button = $('.sentId');

	$button.on("click", function(e) {
  		$('.name').empty();
  		$('.type').empty();
  		$('.description').empty();
  		var $inputValue = $('.searchPokemon').val();

	$.ajax({
	   	url: 'http://pokeapi.co/api/v2/pokemon/'+ $inputValue+'/', 
	   	dataType: 'json',
	   success: pokemons
	});

	function pokemons(response){
		console.log(response);
		$('.name').append(response.name);
	}

	});

})(jQuery);