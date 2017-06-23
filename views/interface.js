document.addEventListener("DOMContentLoaded", function() {

	var api = "http://content.guardianapis.com/search?api-key=test"
	debugger

	function getStories(api) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", api, false);
		xmlHttp.send(null);
		return xmlHttp.responseText;
	}
		
	var apiString = getStories(api);
	

	var storyComponent = new StoryComponent(story);

 	renderStory = function(storyComponent) {
 		storyComponent.render();
 	}

 	renderStory(storyComponent);
});
