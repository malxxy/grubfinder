const scriptURL =
  "https://script.google.com/macros/s/AKfycbyvxy72C8pSoBD7WeTmLH22a-z7bY0HLqyxuYO5YB2UZ2J0PCkBCj0mJ-E8gixpFSVA/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
