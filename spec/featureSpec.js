"use strict";

  var assert = new Assert();

  function displayHeadline() {
    assert.hasContent('headline-list', story.headline);
  }

  function runFeatureTests() {
    displayHeadline();
    console.log('Team Bearfoot : Feature Tests Passed');
  }
