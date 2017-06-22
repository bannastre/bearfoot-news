document.addEventListener("DOMContentLoaded", function() {

var storyComponent = new StoryComponent(story);

 renderStory = function(storyComponent) {
 		storyComponent.render();
 }

 renderStory(storyComponent);
});
