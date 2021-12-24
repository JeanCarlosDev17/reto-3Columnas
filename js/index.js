//posicion de la card actuva

let posActive = null;

//Seleccionar los elementos con la calse .card
const cards = document.querySelectorAll(".card");

//Escuchar los clicks

cards.forEach((card, index) => {
   card.addEventListener("click", function () {
      console.log("click en la columna #", index);
      activarCard(index);
   });
});
window.addEventListener;

//añadir la clase activa
function activarCard(indice) {
   if (posActive !== null) {
      if (indice == posActive) {
         cards[posActive].classList.remove("card-active");
         posActive = null;
         console.log(posActive);
      } else {
         cards[posActive].classList.remove("card-active");
         posActive = indice;
         cards[posActive].classList.add("card-active");
      }
   } else {
      console.log("Vacio");
      posActive = indice;
      cards[posActive].classList.add("card-active");
   }
}
