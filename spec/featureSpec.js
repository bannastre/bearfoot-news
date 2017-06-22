"use strict";

  var assert = new Assert();

  function displayHeadline() {
		var story = new Story("Some kind of Headline", "Some kind of Text")
		var storyComponent = new StoryComponent(story);
		console.log(story.headline);
		console.log(storyComponent.story);
    assert.hasContent('headline-list', story.headline);
  }

  function runFeatureTests() {
    displayHeadline();
    console.log('Team Bearfoot : Feature Tests Passed');
  }

