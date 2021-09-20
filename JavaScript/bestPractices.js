let acc = document.getElementsByClassName("accordionDropdown");
let a;

for (a = 0; a < acc.length; a++) {
  acc[a].addEventListener("click", function () {
    this.classList.toggle("dropDownMenuActive");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
