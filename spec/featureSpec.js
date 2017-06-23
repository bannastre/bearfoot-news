"use strict";

  var assert = new Assert();

  function displayHeadline() {
    assert.hasContent('headline-list', story.headline);
  }

	function displayApiHeadline() {
		assert.hasContent('headline-list', "Juncker says May's EU citizens Brexit offer is 'not sufficient' - Politics live")
	}	

  function runFeatureTests() {
    displayHeadline();
		displayApiHeadline();
    console.log('Team Bearfoot : Feature Tests Passed');
  }
