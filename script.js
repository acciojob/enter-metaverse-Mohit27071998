//your JS code here. If required.
function updateStatus() {
  var status = document.getElementById("status");
  var newHeading = document.createElement("h1");
  newHeading.textContent = "Entered Metaverse";
  status.parentNode.replaceChild(newHeading, status);
}