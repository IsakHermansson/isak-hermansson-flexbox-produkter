
//Index för bilden som visas
var slideIndex = 0; 

window.onload = function() {
  updateSlide(); // startar slideshowen när sidan laddas
};

function updateSlide() {
  var i;
  // hämtar alla produkter
  var x = document.getElementsByClassName("product");
  
  for (i = 0; i < x.length; i++) {
    // gömmer alla produkter och tar bort aniimationen
    x[i].style.display = "none";
    x[i].classList.remove("slideProduct");
  }

  // sätter nya produkten till den som ska visas
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1; // sista produkten så den startar med den nya
  }

  // visar den aktiva produkten och animationen
  x[slideIndex-1].style.display = "block";
  x[slideIndex-1].classList.add("slideProduct");
  

  setTimeout(updateSlide, 5000); // byter bild var femte sekund
}