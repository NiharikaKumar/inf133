

var democontent = document.getElementById('democontent');
democontent.innerHTML = "<h1><button id=\"mybutton\" type=\"button\">Click Me</button></h1>";

var button = document.getElementById("mybutton");

function callback() {
    console.log("Clicked");
}

button.addEventListener("click", callback);

