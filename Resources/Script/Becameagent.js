const showBar = document.getElementById("clickhere");
const edidformBox = document.querySelector(".edidform-box");
const close = document.querySelector("#close");
const submit = document.querySelector("#submit");
const sucessMsg = document.querySelector(".sucess-message");
const sucess = document.querySelector(".butn");

showBar.addEventListener("click", function () {
  edidformBox.style.display = "flex";
});

close.addEventListener("click", function () {
  edidformBox.style.display = "none";
});

submit.addEventListener("click", function () {
  // edidformBox.style.display = "none";
  // sucessMsg.style.display = "flex";
});

sucess.addEventListener("click", function () {
  sucessMsg.style.display = "none";
});


