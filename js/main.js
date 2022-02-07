var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {    
    this.classList.toggle("active");

    var texto = this.nextElementSibling;
    if (texto.style.display === "block") {
      texto.style.display = "none";
    } else {
      texto.style.display = "block";
    }
  });
}