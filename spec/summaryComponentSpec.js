"use strict";

var assert = new Assert();

function summaryComponentHasUrl() {
  var storyUrl = "http://www.telegraph.co.uk/fashion/news/why-going-barefoot-has-become-the-new-status-symbol/";
  var summaryComponent = new SummaryComponent(storyUrl);
  assert.isEqual(summaryComponent.storyUrl, storyUrl);
}

function runsAylienApiCall() {
  var storyUrl = "http://www.telegraph.co.uk/fashion/news/why-going-barefoot-has-become-the-new-status-symbol/";
  var summaryComponent = new SummaryComponent(storyUrl);
  summaryComponent.summarize(storyUrl);
  var summary = summaryComponent.text;
  assert.includes(summary["text"], "burn your shoes")
}
