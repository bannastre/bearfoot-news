"use strict";

function SummaryComponent(storyUrl) {
  this.storyUrl = storyUrl;
  this.text = "burn your shoes";

  this.summarize = function(storyUrl) {

    var URL = "https://api.aylien.com/api/v1/summarize";
    var APP_KEY = secretApiKeys["Aylien"]["Key"];
    var APP_ID = secretApiKeys["Aylien"]["AppID"];

    var requestUrl = URL + storyUrl;

    // curl requestUrl \
    // -H `X-AYLIEN-TextAPI-Application-Key: ${APP_KEY}` \
    // -H `X-AYLIEN-TextAPI-Application-ID: ${APP_ID}`

  }

}
