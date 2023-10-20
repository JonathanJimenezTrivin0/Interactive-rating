const state = document.getElementById("state");
const span = document.getElementById("thankYou__span");
const thankYou = document.querySelector("#thankYou");
const rating = document.querySelector("#rating");
const submit = document.querySelector("#submit");

state.addEventListener("click", (e) => {
  const selectButton = e.target.innerText;

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
        title: `thank you very much for this rating ${selectButton}`,
        showConfirmButton: false,
        timer: 2000,
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
});
