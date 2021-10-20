// DARK MODE 
let btn = document.getElementById("toggleBtn");

let hamburger = document.getElementById("hamburger")
let body = document.getElementsByTagName("body")[0];
btn.addEventListener("click", toggleTheme);



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