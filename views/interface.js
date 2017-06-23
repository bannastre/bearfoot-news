document.addEventListener("DOMContentLoaded", function() {

	var api = "http://content.guardianapis.com/search?api-key=test"

	function getApi(api) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", api, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	}

	var apiString = getApi(api);
	var apiJson = JSON.parse(apiString);


	function createStories() {
		var resultsHash = apiJson["response"]["results"];
	    for(var i = 0; i < resultsHash.length; i++) {
				var newStory = new Story(resultsHash[i])
				var storyComponent = new StoryComponent(newStory);
				storyComponent.render();
	    }
	}

	createStories()
});
