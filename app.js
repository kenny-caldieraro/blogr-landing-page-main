const toggleBtn = document.getElementsByClassName("hamburger-menu")[0];
const navbarLinks = document.getElementsByClassName("navbar-list")[0];

const dropdownBtn = document.getElementsByClassName("nav-item");

const navbar = document.getElementsByClassName("navbar")[0];

for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener("click", function () {
    this.classList.toggle("rotate-active");
    var panel = this.nextElementSibling;
    console.log(panel);
    removeSelection(dropdownBtn[i], dropdownBtn);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function removeSelection(selected, elements) {
  for (let i = 0; i < dropdownBtn.length; i++) {
    if (dropdownBtn[i] != selected) {
      dropdownBtn[i].classList.remove("rotate-active");
      var panel = dropdownBtn[i].nextElementSibling;
      console.log(panel);
      panel.style.maxHeight = null;
    }
  }
}

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

window.onscroll = () => {
  if (window.scrollY > 300) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
