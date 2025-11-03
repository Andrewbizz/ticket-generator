const form = document.querySelector(".generateForm");
const eachInput = document.querySelectorAll(".layInput");
const imagUpload = document.querySelector(".invUpload");
const Imgerror = document.querySelector(".Imgerror");
const avatar = document.querySelector(".uploadAvatarbefore");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
imagUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (ev) {
    avatar.style.backgroundImage = `url(${ev.target.result})`;
    avatar.classList.add('makeBigger')
  };
  reader.readAsDataURL(file);
});


const validateForm = function () {
  console.log("this a test ");
};

eachInput.forEach((each) => {
  const htmlString = '<div class="errorMessage">  </div>';

  each.insertAdjacentHTML("beforeend", htmlString);
});
