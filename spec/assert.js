function Assert() {
  this.isTrue = function(assertion) {
    if (!assertion) {
      throw new Error("Expected " + assertion + " to be True.");
    }
    return (assertion + " is true");
  };

  this.isFalse = function(assertion) {
    if (assertion) {
      throw new Error("Expected " + assertion + " to be False.");
    }
    return (assertion + " is false");
  };

  this.isEqual = function(testSubject, expectedResult) {
    if (testSubject !== expectedResult ) {
      throw new Error("Expected " + testSubject + " to be Equal to " + expectedResult + "." );
    }
    return (testSubject + " is Equal to " + expectedResult);
  };

  this.hasContent = function(elementID, expectedResult) {
    var testSubject = document.getElementById(elementID).innerHTML;
    if ( !testSubject.includes(expectedResult) ) {
      throw new Error("Expected " + elementID + " to have content " + expectedResult + ".");
    }
    return (elementID + " has content " + expectedResult + ".");
  };
}

var assert = new Assert();
