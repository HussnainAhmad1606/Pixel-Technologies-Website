// DARK MODE 
let btn = document.getElementById("toggleBtn");

let hamburger = document.getElementById("hamburger")
btn.addEventListener("change", toggleTheme);
let body = document.getElementsByTagName("body")[0];
toggleTheme();


function toggleTheme() {
	if (btn.checked) {
		body.setAttribute("data-theme", "dark");
		hamburger.style.color = "white";
	}
	else {
		body.setAttribute("data-theme", "light");
		hamburger.style.color = "#1d0d77";
		
	}
}