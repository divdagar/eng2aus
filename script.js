var inputText = document.querySelector(".input-text");
var outputText = document.querySelector(".output-text");
var translateButton = document.querySelector(".translate-button");

function pushOutput(output) {
  outputText.innerText = output;
};
function errorHandler(error){
  console.log("error has occured", error);
  alert("Please Try Again Later")
}


function clickHandler()  {
  var Text = inputText.value;
  console.log(Text);
  fetch(`https://api.funtranslations.com/translate/australian.json?text=${Text}`)
    .then((res) => res.json())
    .then((data) => {outputText.innerText = json.contents.translated;})
    .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler);