"use strict";

function StoryComponent(story) {
	this.story = story;

	this.setup = function() {
	 	var el = document.createElement('li');
		el.innerHTML = story.headline;
		console.log(story.headline);
 		return el;
	};

	this.render = function() {
		var el = this.setup();
		var list = document.getElementById('headline-list');
		list.appendChild(el)
	};

}
