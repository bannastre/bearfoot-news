"use strict";

var assert = new Assert();

function hasUrl() {
  var storyUrl = "http://www.telegraph.co.uk/fashion/news/why-going-barefoot-has-become-the-new-status-symbol/";
  var summaryComponent = new SummaryComponent(storyUrl);
  assert.isEqual(summaryComponent.storyUrl, storyUrl);
}

function runsApiCall() {
  var storyUrl = "http://www.telegraph.co.uk/fashion/news/why-going-barefoot-has-become-the-new-status-symbol/";
  var summaryComponent = new SummaryComponent(storyUrl);
  summaryComponent.summarize();
  assert.includes(summaryComponent.text, "burn your shoes")
}
