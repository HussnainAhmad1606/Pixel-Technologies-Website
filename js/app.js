
// DARK MODE 
let btn = document.getElementById("toggleBtn");

let hamburger = document.getElementById("hamburger")
let body = document.getElementsByTagName("body")[0];
btn.addEventListener("change", toggleTheme);
previousTheme();





function toggleTheme() {
	if (btn.checked) {
		body.setAttribute("data-theme", "dark");
		hamburger.style.color = "white";
		localStorage.setItem("theme", "dark");
		
	}
	else {
		body.setAttribute("data-theme", "light");
		hamburger.style.color = "#1d0d77";
		localStorage.setItem("theme", "light");
		
	}
	console.log(localStorage.getItem("theme"))
}




// Sidebar logic
let sidebar = document.getElementById("sidebar");
let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", function() {
	sidebar.style.display = "block";
})


closeMenu.addEventListener("click", function() {
	sidebar.style.display = "none";
})

function previousTheme() {
	let choice = localStorage.getItem("theme");

	if (choice == "dark") {
		btn.checked = true;
		toggleTheme();
	}
	else {
		btn.checked = false;	
		toggleTheme();
	}
}

