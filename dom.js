function show() {
  var myRequest = new XMLHttpRequest();
  myRequest.open("GET", "https://dog.ceo/api/breeds/list");
  myRequest.send();
  console.log(myRequest)
}


// function showDogBreeds(e) {
//   var myRequestAsText = e.srcElement.response;
//   var myResponseAsAJSON = JSON.parse(myRequestAsText);
//   p.innerHTML = myResponseAsAJSON.value;
// }

// function showDogBreedsImg(e) {}
