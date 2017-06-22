"use strict";

var story;

function StoryComponent(story) {
	this.story = story;

	this.setup = function() {
	 	var el = document.createElement('li');
		console.log("el: " + el.innerHTML);
		el.innerHTML = story.headline;
		console.log("el: " + el.innerHTML);
		console.log(story.headline);
 		return el;		
	};

	this.render = function() {
		console.log(1);
		var el = this.setup();
		var list = document.getElementById('headline-list');
		list.appendChild(el)
	};

}
