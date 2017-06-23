"use strict";

  var assert = new Assert();

  function displayHeadline() {
    assert.hasContent('headline-list', story.headline);
  }

	function displayApiHeadline() {
		assert.hasContent('headline-list', "Trumpcare is like a vampire, set on sinking its teeth into the poor")
	}

  function runFeatureTests() {
    displayHeadline();
		displayApiHeadline();
    console.log('Team Bearfoot : Feature Tests Passed');
  }
