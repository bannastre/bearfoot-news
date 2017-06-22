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
	hasHeadline();
	hasText();
	storyComponentHasStory();
  console.log("Team Bearfoot: Unit Tests Passed");
}
