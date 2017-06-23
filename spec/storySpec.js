"use strict";
var assert = new Assert();
var story = new Story({"id":"sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-06-22T14:28:41Z","webTitle":"Royal Ascot 2017","webUrl":"https://www.theguardian.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live","apiUrl":"https://content.guardianapis.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live","isHosted":false})

function storyHasHeadline() {
	var headline = "Royal Ascot 2017";
  assert.isEqual(story.headline, headline);
}

function storyHasUrl() {
	var url = "https://www.theguardian.com/sport/live/2017/jun/22/royal-ascot-2017-buildup-to-the-gold-cup-live"
	assert.isEqual(story.url, url);
}

function runUnitTests(){
	storyHasHeadline();
	storyHasUrl();
	console.log("Story: ")
	storyComponentHasStory();
	console.log("Summary Component: ")
	summaryComponentHasUrl();
	runsAylienApiCall();
  console.log("Team Bearfoot: Unit Tests Passed");
}
