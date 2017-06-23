"use strict";

  var assert = new Assert();

  function displayHeadline() {
    assert.hasContent('headline-list', story.headline);
  }

	function displayApiHeadline() {
		assert.hasContent('headline-list', "Royal Ascot 2017")
	}

  function runFeatureTests() {
    displayHeadline();
		displayApiHeadline();
    console.log('Team Bearfoot : Feature Tests Passed');
  }
