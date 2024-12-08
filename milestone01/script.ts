// Select the button and the skills section
const toggleButton = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
const skillsSection = document.getElementById("skillsSection") as HTMLDivElement;

// Function to toggle visibility of the skills section
const toggleSkills = () => {
  if (skillsSection.classList.contains("hidden")) {
    skillsSection.classList.remove("hidden"); // Make the section visible
  } else {
    skillsSection.classList.add("hidden"); // Hide the section
  }
};

// Add event listener to the button
toggleButton.addEventListener("click", toggleSkills);
