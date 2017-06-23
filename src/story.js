function Story(informationObject) {
  this.informationObject = informationObject;

  this.headline = informationObject["webTitle"];
	this.image = informationObject["fields"]["thumbnail"];
}
