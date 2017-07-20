(function() {
	jQuery.ajax({
	   url: (function(){
	            var url = 'pokeapi.co/api/v2/pokemon/'	       
	            return (url)
	            })(),

	   dataType: 'json',
	   
		   success: function(response) {      
		   			 req= response;   	
		  		   getArtist(response);
		  
	   }
});

})();