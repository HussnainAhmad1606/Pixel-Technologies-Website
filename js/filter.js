console.log("Filter.js");
// Filter Feature in Portfolio Section

const allProjects = document.getElementsByClassName("project");
let webDev = document.getElementsByClassName("webDev");
let graphicDesign = document.getElementsByClassName("graphicDesign");
let webDesign = document.getElementsByClassName("webDesign");


let filterBtns = document.getElementsByClassName("filterBtn");
console.log(filterBtns);
// Adding Click Event Listener to all buttons
for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function(e) {
            // Getting the text of clicked button
            filteredValue = e.target.textContent;


            // Animation on show up
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].style.animation = "0.5s ease-in-out animate"
            }



            // Checking if text of the clicked button is ALL
            if (filteredValue == "All") {
                console.log("All Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    allProjects[i].style.display = 'inline-block';
                }
            }

            // if Button clicked has text of Graphic Design
            else if (filteredValue == "Graphic Design") {
                console.log("Graphic Design Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("graphicDesign")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }


            // if Button clicked has text of Web Dev
            else if (filteredValue == "Web Dev") {
                console.log("Web Dev Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("webDev")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }

            // if Button clicked has text of Web Dev
            else if (filteredValue == "Web Design") {
                console.log("Web Design Button Clicked!");
                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("webDesign")) {
                        allProjects[i].style.display = "inline-block";
                    } else {
                        allProjects[i].style.display = "none"
                    }
                }
            }




        })
    }
