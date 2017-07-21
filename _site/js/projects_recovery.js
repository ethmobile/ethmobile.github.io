function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

var contributors = httpGetAsync('https://api.github.com/users/ethmobile/repos', function(response) {

	json = JSON.parse(response);

	json.forEach(function(entry){

		var titre = entry.name;
		var description = entry.description;

		if(description == null) {
			description = '';
		}

		var langage = entry.language;
		var image_project = {};

		if (langage != null) {
			image_project[titre] = 'images/' + langage + '.png';
		}
		else if (langage == null) {
			image_project['default_image'] = 'images/default_image.png';
		}

		// image_project['titre'] = 'images/*.ext';	Attention à la dimension de l'image !

		var block_project = '<div class="4u 12u(mobile)"><section class="boxlist"><img src="';
		var button = '';

		var url_project = 'pages/' + titre + '/index.html';

		if(UrlExists(url_project)) {
		    button = '<footer><a href="pages/' + titre + '/index.html" class="button alt">Find out more</a></footer></section></div>';												
		}				  

		block_project += (image_project[titre] !== undefined?image_project[titre]:image_project['default_image']);

		block_project += '" class="image featured" alt=""/><header><h3 id="' + titre + '">' + titre + '</h3></header><p id="' + titre + '_desc">' + description + '</p>' + button;

		$('#container_projects').append(block_project);
	});
});