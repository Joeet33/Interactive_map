var theCharacter = document.querySelector("#character");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
  var parentPosition = getPosition(container);
  var xPosition = e.clientX - parentPosition.x - theCharacter.offsetWidth / 2;
  var yPosition = e.clientY - parentPosition.y - theCharacter.offsetHeight / 2;

  var translate3dValue =
    "translate3d(" + xPosition + "px," + yPosition + "px, 0)";

  theCharacter.style.transform = translate3dValue;
}

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    if (element.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScrollPos =
        element.scrollLeft || document.documentElement.scrollLeft;
      var yScrollPos = element.scrollTop || document.documentElement.scrollTop;

      xPosition += element.offsetLeft - xScrollPos + element.clientLeft;
      yPosition += element.offsetTop - yScrollPos + element.clientTop;
    } else {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    }

    element = element.offsetParent;
  }

  return {
    x: xPosition,
    y: yPosition,
  };
}
