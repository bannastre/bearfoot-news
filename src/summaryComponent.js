"use strict";

function SummaryComponent(storyUrl) {
  this.storyUrl = storyUrl;
  this.text = "burn your shoes";

  this.summarize = function(storyUrl) {

    var MIDDLEWARE_URL = "https://damp-headland-20696.herokuapp.com/aylien?apiRequestUrl="
    var AYLIEN_URL = "https://api.aylien.com/api/v1/summarize?url=";

    var requestUrl = MIDDLEWARE_URL + AYLIEN_URL + storyUrl;
    var aylienReq = new XMLHttpRequest();

    aylienReq.open("GET", requestUrl, false);
    aylienReq.send();

    this.text = JSON.parse(aylienReq.responseText);
  }

}
