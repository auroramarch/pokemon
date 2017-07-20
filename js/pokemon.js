function clearScreen(){
	$('.name').empty();
	$('.type').empty();
	$('.description').empty();

	var images = $('div.card.results img.pokemon-image');

    if(images.length > 0) {
        for(var i = 0; i < images.length; i++) {
            images[i].remove();
        }
    }
}

var $buttonPokemon = $('.sentId');

var $buttonType = $('.sentType');

$buttonType.on("click", function(e){
	clearScreen();
	var $selectValue = $('select').val();

	$.ajax({
	   	url: 'http://pokeapi.co/api/v2/type/'+$selectValue, 
	   	dataType: 'json',
	   	success: types
	});

	function types(responseTypes){
		for(var i = 0; i < 10; i++){
			console.log(responseTypes.pokemon[i].pokemon.name);
		};
	}


});


$buttonPokemon.on("click", function(e) {
		clearScreen();

		var $inputValue = $('.searchPokemon').val();

$.ajax({
   	url: 'http://pokeapi.co/api/v2/pokemon/'+ $inputValue+'/', 
   	dataType: 'json',
   success: pokemons
});

function pokemons(response){
	$('.pokemon').before("<img class='card-img-top pokemon-image' src='" + response.sprites.front_default + "' alt='Image Pokemon'>");
	$('.name').append(response.name);
	if (response.types.length>1){
		$('.type').append(response.types[0].type.name);
		$('.type').append(' '+response.types[1].type.name);
	} else {
		$('.type').append(response.types[0].type.name);
	}

	var $pokemonId= response.id;
	console.log($pokemonId);
	
	$.get ('http://pokeapi.co/api/v1/pokemon/' + $pokemonId, descriptions);

	function descriptions (pokeDescription){
		$.get ('http://pokeapi.co' + pokeDescription.resource_uri, textDescription);
	}
	function textDescription (data) {
		$.get ('http://pokeapi.co' + data.descriptions[0].resource_uri, description);
	}

	function description (dataDescription){
		$('.description').append(dataDescription.description);
	}


}


});
	