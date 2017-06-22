"use strict";

var assert = new Assert();

function storyComponentHasStory() {
	var story = { headline: "Breaking news: winter is over." };
	var storyComponent = new StoryComponent(story);
	assert.isEqual(storyComponent.story, story);
}

function runUnitTests() {
	storyComponentHasStory()
	console.log("Team Barefoot approves these unit tests.")
}

