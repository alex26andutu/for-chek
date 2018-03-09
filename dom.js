show();

function load(e) {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", show);
  myRequest.open("GET", "https://dog.ceo/api/breeds/list");
  myRequest.send();

  var myRequestAsText = e.target.response;
  var myResponseAsAJSON = JSON.parse(myRequestAsText);
  dogBreed.innerHTML = myResponseAsAJSON.value;
  console.log(myResponseAsAJSON);
}
