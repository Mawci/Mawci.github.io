//These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//change the slides when the left or right arrows are pressed
function plusSlides(n)
{
    showSlides(slideIndex += n)
}

//this function changes the slides when the dots are clicked
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");// get all elements that has the class name "mySlides" and stores them in the array variable "slides"
    var dots = document.getElementsByClassName("dot");//store all elements with the class name dot in the array "dots"
    if (n > slides.length) { slideIndex = 1 };//if the number passed into the function is larger than the number of slides, set the value to 1 (wrap around)
    if (n < 1) { slideIndex = slides.length; }//if the number passed is less than one then set the value to the size of array which would be the last element
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";//Take each element of the slides and set their display to none
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")// goes through and removes the active styling from each of the dots
    }
    slides[slideIndex - 1].style.display = "block";//displays the current image in the slideshow
    dots[slideIndex - 1].className += " active";//adds active styling to the dot associated with the image
}

// this code will close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function (event) {
    //here we state that if the click happens on the cancel button OR anywhere that is not the conctact form AND the click does not happen on any elements with the contact class, then call the closeForm function
    if (event.target.mathces(".cancel") || !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)