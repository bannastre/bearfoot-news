document.addEventListener("DOMContentLoaded", function() {

	var guardianApi = "http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail"

	function getGuardianApi(api) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", api, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	}

	var guardianApiString = getGuardianApi(guardianApi);
	var guardianApiJson = JSON.parse(guardianApiString);


	function createStories() {
		var resultsHash = guardianApiJson["response"]["results"];
	    for(var i = 0; i < resultsHash.length; i++) {
				var newStory = new Story(resultsHash[i])
				var storyComponent = new StoryComponent(newStory);
				storyComponent.render();
	    }
	}

	createStories();
});
