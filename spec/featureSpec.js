"use strict";

  var assert = new Assert();

  function displayHeadline() {
    var headline = "Team Barefoot makes waves in tech news";
    assert.hasContent('headlines', headline);
  }

  function runFeatureTests() {
    displayHeadline();
    console.log('Team Bearfoot : Feature Tests Passed');
  }
