// Get the container element
var btnContainer = document.getElementById("nav-items");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i of btns) {
  i.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
