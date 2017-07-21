$('h2').each(function(id){
    var id=this.id;
    var nom = this.textContent;
	$('#summary').append('<li><a href="#'+id+'" style="text-decoration: none;">'+nom+'</a></li>');
});