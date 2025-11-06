const form = document.querySelector(".generateForm");
const eachInput = document.querySelectorAll(".layInput");
const imagUpload = document.querySelector(".invUpload");
const Imgerror = document.querySelector(".Imgerror");
const avatar = document.querySelectorAll(".uploadAvatarbefore");
const fullNameInp = document.querySelector("#fullName");
const mailInp = document.querySelector("#emailAddress");
const gitUnameInp = document.querySelector("#gitUname");
const imgErr = document.querySelector(".Imgerror");
const maindiv = document.querySelector(".float1");
const maindiv2 = document.querySelector(".float2");
const input = document.querySelector(".inpPut");
const ReplaceBtn = document.querySelector(".ReplaceBtn");
const fullnameDiv = document.querySelectorAll(".fullNameDiv");
const mailDiv = document.querySelector(".emaildiv");
const gitDiv = document.querySelector(".gitDiv");
const today = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const TickNum = document.querySelector('.tickNum')
const dater = document.querySelector(".dateCont");
const sixDigitNumber = generateRandom6DigitNumber();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

imagUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (ev) {
    avatar.forEach((av) => {
      av.style.backgroundImage = `url(${ev.target.result})`;
      av.classList.add("makeBigger");
    });
  };

  if (input) {
    input.remove();
  }

  ReplaceBtn.classList.add("show");

  reader.readAsDataURL(file);
});

eachInput.forEach((each, i) => {
  const htmlString = '<div class="errorMessage">  </div>';

  each.insertAdjacentHTML("beforeend", htmlString);
});

const validateForm = function () {
  let isValid = true; // reset validation state each time

  const validator = function (inpName, errIndex, errorMessage) {
    const inpErr = eachInput[errIndex].querySelector(".errorMessage");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inpName.value === "") {
      inpErr.textContent = errorMessage;
      isValid = false;
      return;
    } else {
      inpErr.textContent = "";
    }

    if (inpName.id === "emailAddress") {
      if (emailRegex.test(inpName.value)) {
        inpErr.textContent = ``;
      } else {
        inpErr.textContent = `that's not an email`;
        isValid = false;
      }
    }
  };

  validator(fullNameInp, 0, "Full Name cannot be empty");
  validator(mailInp, 1, "Mail cannot be empty");
  validator(gitUnameInp, 2, "git Username cannot be empty");

  if (imagUpload.value === "") {
    imgErr.style.color = "red";

    isValid = false;
  } else {
    imgErr.style.color = "white";
  }

  if (isValid === true) {
    populateHtml();
  }
};

function generateRandom6DigitNumber() {
  // Generate a random number between 100000 (inclusive) and 999999 (inclusive)
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return randomNumber;
}

const populateHtml = function () {
  maindiv.style.display = "none";
  maindiv2.style.display = "flex";

  fullnameDiv.forEach((each) => {
    each.textContent = fullNameInp.value;
  });
  gitDiv.textContent = gitUnameInp.value;
  mailDiv.textContent = mailInp.value;
  dater.textContent = today;
  TickNum.textContent = sixDigitNumber
};
