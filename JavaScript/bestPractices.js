let acc = document.getElementsByClassName("accordionDropdown");
let a;

for (a = 0; a < acc.length; a++) {
  acc[a].addEventListener("click", function () {
    this.classList.toggle("dropDownMenuActive");
    let accordianPanel = this.nextElementSibling;
    if (accordianPanel.style.maxHeight) {
      accordianPanel.style.maxHeight = null;
    } else {
      accordianPanel.style.maxHeight = accordianPanel.scrollHeight + "px";
    }
  });
}
