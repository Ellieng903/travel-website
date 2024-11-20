const submitBtn = document.getElementById("submit");
const message = document.querySelector(".thankyou-message");

submitBtn.addEventListener("click", () => {
  event.preventDefault();
  message.style.display = "block";
})


