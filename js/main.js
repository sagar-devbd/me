// FOR 3D IMAGES CODE

$(".project").hover3d({
	selector: ".project__card"
});


// TEXT ANIMATED CODE

$('.section_main_title').t({
    beep: true
});

// MODAL IMAGES


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



