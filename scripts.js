var button = document.getElementById("btn");
var input = document.getElementById("input");
var eight = document.getElementById("eight");
var text = document.getElementById("text");
var options=["yes", "maybe", "dream on", "definitely", "it will be so", "ask again later", "of course", "no", "kitties, rainbows, and corgis"];

button.addEventListener("click", function() {
    if (input.value <= 1) {
        alert("Please type in your question!")
    } else {
        eight.innerText = "";
        var num = input.value.length % options.length;
        text.innerText= options[num];
    }
});