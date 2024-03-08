const burgerButton = document.getElementById("burgerButton");
const burgerIcon = document.getElementById("_hamburger");

const newButtonSmall = document.getElementById("_changeThemeConS");
const newButtonLarge = document.getElementById("_changeThemeConL");

const changeThemeS = document.getElementById("_changeThemeS");
const changeThemeL = document.getElementById("_changeThemeL");
const navColor = document.getElementById("_navColor");
const btnLogin = document.getElementById("_btnLogin");

const card = document.querySelectorAll("#_card");
const listgroup = document.querySelectorAll(".l-item");
const fsize = document.querySelectorAll(".f-size");

burgerButton.addEventListener("click", () => {
  if (burgerIcon.classList.contains("fa-bars")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times");
    burgerIcon.style.transform = "rotate(360deg)";
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars");
    burgerIcon.style.transform = "rotate(0deg)";
  }
});

const updateButtonVisibility = () => {
  const win = window;

  if (win.innerWidth >= 992) {
    newButtonSmall.style.display = "none";
    newButtonLarge.style.display = "block";
  } else {
    newButtonSmall.style.display = "block";
    newButtonLarge.style.display = "none";
  }
};

window.addEventListener("resize", updateButtonVisibility);
updateButtonVisibility();

newButtonSmall.addEventListener("click", () => {
  if (changeThemeS.classList.contains("fa-moon")) {
    changeThemeS.classList.remove("fa-moon");
    changeThemeS.classList.add("fa-sun");
    navColor.classList.remove("bg-light");
    navColor.classList.add("bg-dark");
    navColor.classList.remove("navbar-light");
    navColor.classList.add("navbar-dark");
    document.body.style.backgroundColor = "#1F2327";
    document.body.style.color = "white";
    btnLogin.style.color = "#d8d6d6";
    card.forEach((c) => c.classList.add("card-dark"));
    listgroup.forEach((lg) => lg.classList.add("list-group-item-dark"));
    fsize.forEach((f) => f.classList.add("f-size-dark"));
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";
  } else {
    changeThemeS.classList.remove("fa-sun");
    changeThemeS.classList.add("fa-moon");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    navColor.classList.remove("bg-dark");
    navColor.classList.add("bg-light");
    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");
    btnLogin.style.color = "#000";
    card.forEach((c) => c.classList.remove("card-dark"));
    listgroup.forEach((lg) => lg.classList.remove("list-group-item-dark"));
    fsize.forEach((f) => f.classList.remove("f-size-dark"));
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeS.style.transform = changeThemeS.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";
  }
});

newButtonLarge.addEventListener("click", () => {
  if (changeThemeL.classList.contains("fa-moon")) {
    changeThemeL.classList.remove("fa-moon");
    changeThemeL.classList.add("fa-sun");
    document.body.style.backgroundColor = "#1F2327";
    document.body.style.color = "white";
    navColor.classList.remove("bg-light");
    navColor.classList.add("bg-dark");
    navColor.classList.remove("navbar-light");
    navColor.classList.add("navbar-dark");
    btnLogin.style.color = "#d8d6d6";
    card.forEach((c) => c.classList.add("card-dark"));
    listgroup.forEach((lg) => lg.classList.add("list-group-item-dark"));
    fsize.forEach((f) => f.classList.add("f-size-dark"));
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-sun")
      ? "rotate(360deg)"
      : "rotate(0deg)";
  } else {
    changeThemeL.classList.remove("fa-sun");
    changeThemeL.classList.add("fa-moon");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    navColor.classList.remove("bg-dark");
    navColor.classList.add("bg-light");
    navColor.classList.remove("navbar-dark");
    navColor.classList.add("navbar-light");
    btnLogin.style.color = "#000";
    card.forEach((c) => c.classList.remove("card-dark"));
    fsize.forEach((f) => f.classList.remove("f-size-dark"));
    listgroup.forEach((lg) => lg.classList.remove("list-group-item-dark"));

    changeThemeL.style.transform = changeThemeL.classList.contains("fa-moon")
      ? "rotate(360deg)"
      : "rotate(0deg)";
    changeThemeL.style.transform = changeThemeL.classList.contains("fa-sum")
      ? "rotate(360deg)"
      : "rotate(0deg)";
  }
});

const btnpop = document.querySelectorAll(".btn-pop");
const popup = document.querySelector("#myPopup1"); // Select the popup
const mainmenu = document.getElementById("_mainMenu");

mainmenu.addEventListener("click", () => {
  popup.style.display = "none";
});

btnpop.forEach((button) => {
  button.addEventListener("click", () => {
    const popID = button.dataset.popup;
    const popupimg = document.querySelector(".popup-image");

    switch (popID) {
      case "shoe1":
        popupimg.innerHTML =
          '<img src="assets/images/shoe1.png" alt="shoe1" class="img-fluid">';
        break;
      case "shoe2":
        popupimg.innerHTML =
          '<img src="assets/images/shoe2.png" alt="shoe2" class="img-fluid">';
        break;
      case "shoe3":
        popupimg.innerHTML =
          '<img src="assets/images/shoe3.png" alt="shoe3" class="img-fluid">';
        break;
      case "shoe4":
        popupimg.innerHTML =
          '<img src="assets/images/shoe4.png" alt="shoe4" class="img-fluid">';
        break;
      case "shoe5":
        popupimg.innerHTML =
          '<img src="assets/images/shoe5.png" alt="shoe5" class="img-fluid">';
        break;
      case "shoe6":
        popupimg.innerHTML =
          '<img src="assets/images/shoe6.png" alt="shoe6" class="img-fluid">';
        break;
      case "shoe7":
        popupimg.innerHTML =
          '<img src="assets/images/shoe7.png" alt="shoe7" class="img-fluid">';
        break;
      case "shoe8":
        popupimg.innerHTML =
          '<img src="assets/images/shoe8.png" alt="shoe8" class="img-fluid">';
        break;
    }

    popup.style.display = "block"; // Display the popup
  });
});

// Add an event listener to close the popup when the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
