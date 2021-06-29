var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img0");
var pictures = document.querySelectorAll('.image');
pictures.forEach(pic => {
  pic.onclick = Modal;
})

function Modal() {
  modal.style.display = "block";
  modalImg.src = this.src.replace("640", "960");
  modalImg.style.display = "block";
  modalImg.style.marginLeft = "auto";
  modalImg.style.marginRight = "auto";
  modalImg.style.width = "50%";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// TEXT parallax
let lena = document.getElementById("name");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  lena.style.top = 50 + value / 30 + "%";
});
