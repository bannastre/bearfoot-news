"use strict";
var assert = new Assert();


var story = new Story({"id":"politics/live/2017/jun/23/merkel-says-mays-offer-on-eu-citizens-is-a-good-start-live-updates","type":"liveblog","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2017-06-23T12:45:12Z","webTitle":"Police considering manslaughter charges over Grenfell Tower fire","webUrl":"https://www.theguardian.com/politics/live/2017/jun/23/merkel-says-mays-offer-on-eu-citizens-is-a-good-start-live-updates","apiUrl":"https://content.guardianapis.com/politics/live/2017/jun/23/merkel-says-mays-offer-on-eu-citizens-is-a-good-start-live-updates","fields":{"thumbnail":"https://media.guim.co.uk/9882b636d7e0df23cc792cb27de092decbebd8e9/0_30_4773_2865/500.jpg", "bodyText": "Some testing text"},"isHosted":false});
		
function storyHasHeadline() {
	var headline = "Police considering manslaughter charges over Grenfell Tower fire";
  assert.isEqual(story.headline, headline);
}
	
	function storyHasImage() {
		var image = "https://media.guim.co.uk/9882b636d7e0df23cc792cb27de092decbebd8e9/0_30_4773_2865/500.jpg"
		assert.isEqual(story.image, image);
	}

function storyHasUrl() {
	var url = "https://www.theguardian.com/politics/live/2017/jun/23/merkel-says-mays-offer-on-eu-citizens-is-a-good-start-live-updates"
	assert.isEqual(story.url, url);
}

function storyHasFullText() {
	var text = "Some testing text"
	assert.isEqual(story.fullText, text)
}

function runUnitTests(){
	//Story
	storyHasHeadline();
  storyHasImage();
	storyHasUrl();
	storyHasFullText();
	// Story Component
	storyComponentHasStory();
	// Summary Component
	summaryComponentHasUrl();
	runsAylienApiCall();
  	console.log("Team Bearfoot: Unit Tests Passed");
}
