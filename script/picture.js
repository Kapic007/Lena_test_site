var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
document.getElementById("Img1").onclick = Modal;
document.getElementById("Img2").onclick = Modal;
document.getElementById("Img3").onclick = Modal;
document.getElementById("Img4").onclick = Modal;
document.getElementById("Img5").onclick = Modal;
document.getElementById("Img6").onclick = Modal;
document.getElementById("Img7").onclick = Modal;
document.getElementById("Img8").onclick = Modal;
document.getElementById("Img9").onclick = Modal;
document.getElementById("Img10").onclick = Modal;
document.getElementById("Img11").onclick = Modal;
document.getElementById("Img12").onclick = Modal;
document.getElementById("Img13").onclick = Modal;
document.getElementById("Img14").onclick = Modal;
var modalImg = document.getElementById("img0");

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
