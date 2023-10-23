const state = document.getElementById("state");
const span = document.getElementById("thankYou__span");
const thankYou = document.querySelector("#thankYou");
const rating = document.querySelector("#rating");
const submit = document.querySelector("#submit");

// Seleccionamos el target que se realiza dentro del div state, es el que contiene los botonos de las calificaciones e identificacmos el contenido interno del boton, es este caso va desde el 1 hasta el 5.

state.addEventListener("click", (e) => {
  const selectButton = e.target.innerText;
  if (
    selectButton === "1" ||
    selectButton === "2" ||
    selectButton === "3" ||
    selectButton === "4" ||
    selectButton === "5"
  ) {
    // Una vez tenemos seleccionado la calificacion creamos un evento al boton de sumit, al seleccionar submit se escondel el div de rating y se activa el div de thankYou, en el div de thankYou se cambia el valor del span por la calificacion seleccionada anteriormente (1,2,3,4 0 5)

    submit.addEventListener("click", () => {
      thankYou.style.display = "block";
      rating.style.display = "none";
      span.innerText = selectButton;
      if (selectButton >= 3) {
        Swal.fire({
          imageUrl:
            "https://th.bing.com/th/id/R.6d2b9727f173672064a02a1dde429eff?rik=qzuZGcJTHSngJA&riu=http%3a%2f%2f68.media.tumblr.com%2f8c0e793a326c6b141ae6b5479b0e0ba2%2ftumblr_or3nmuzPvQ1tlmx1vo1_500.gif&ehk=MR8s1XHBpXSO3S%2f6o5YYAeIH%2b0YL5c3jFhschGC3t5M%3d&risl=&pid=ImgRaw&r=0",
          position: "center",
          icon: "success",
          title: `Thank you very much for this rating ${selectButton}`,
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        Swal.fire({
          imageUrl: "https://media.giphy.com/media/13EX6AooEOE98c/giphy.gif",
          position: "center",
          icon: "warning",
          title: `I will strive to improve this rating ${selectButton}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  }

  // Si se cliquea submit sin seleccionar ninguna calificacion saldra una alerta indicando que se debe se seleccionar un numero de calificacion.
  if (selectButton === "SUBMIT") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must select a rating!",
    });
  }
});
