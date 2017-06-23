function Story(informationObject) {
  this.informationObject = informationObject;

  this.headline = informationObject["webTitle"];
	this.url = informationObject["webUrl"];
}
