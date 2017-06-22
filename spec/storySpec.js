"use strict";
var assert = new Assert();

var headline = "Team Barefoot makes waves in tech news";
var text = "{“You can pre-board with your leg like that,” a kind, gray haired flight attendant bends down, gesturing to the ungainly boot I’m wearing on my left leg, a brace for a recent fracture. I smile and thank him for the advice.}"

var story = new Story(headline, text);

function hasHeadline() {
  assert.isEqual(story.headline, headline);
}

function hasText() {
  assert.isEqual(story.text, text);
}

function runUnitTests(){
  hasHeadline();
  hasText();
  console.log("Team Bearfoot: Unit Tests Passed");
}
