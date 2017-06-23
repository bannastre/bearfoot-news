"use strict";
var assert = new Assert();

function hasHeadline() {
	var headline = "This is a headline!";
  assert.isEqual(story.headline, headline);
}

function hasText() {
	var text = "This is a body!";
  assert.isEqual(story.text, text);
}

function runUnitTests(){
	console.log("Story: ")
	hasHeadline();
	hasText();
	console.log("Story Component: ")
	storyComponentHasStory();
	console.log("Summary Component: ")
	hasUrl();
	runsApiCall();
  console.log("Team Bearfoot: Unit Tests Passed");
}
