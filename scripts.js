var button = document.getElementById("btn");
var input = document.getElementById("input");
var eight = document.getElementById("eight");
var text = document.getElementById("text");
var options=["yes", "no", "maybe"];

button.addEventListener("click", function() {
    if (input.value <= 1) {
        alert("Please type in your question!")
    } else {
        eight.innerText = "";
        var num = input.value.length % options.length;
        text.innerText= options[num];
    }
});