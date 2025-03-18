document.addEventListener("DOMContentLoaded", function () {

  async function loadHomepageContent() {
    try {
      const response = await fetch("/Homepage.html");
      if (!response.ok) throw new Error("Failed to load Homepage content");

      const data = await response.text();
      const homepageContainer = document.getElementById("homepage-content");
      
      if (homepageContainer) {
        homepageContainer.innerHTML = data;
      } else {
        console.warn("Homepage container not found!");
      }
    } catch (error) {
      console.error("Error loading homepage:", error);
    }
  }

  // Load homepage content dynamically
  loadHomepageContent();
});
