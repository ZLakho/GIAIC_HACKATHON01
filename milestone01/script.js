// Select the button and the skills section
var toggleButton = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skillsSection");
// Function to toggle visibility of the skills section
var toggleSkills = function () {
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden"); // Make the section visible
    }
    else {
        skillsSection.classList.add("hidden"); // Hide the section
    }
};
// Add event listener to the button
toggleButton.addEventListener("click", toggleSkills);
