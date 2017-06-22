document.addEventListener("DOMContentLoaded", function() {

//var headline;
//var text;

 renderStory = function(story, storyComponent) {
	var story = new Story(headline, text);
	var storyComponent = new StoryComponent(story);	

 		storyComponent.render();
 }

 renderStory(story, storyComponent);
});
