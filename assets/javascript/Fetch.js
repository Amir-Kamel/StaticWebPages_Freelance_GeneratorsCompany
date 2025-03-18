document.addEventListener("DOMContentLoaded", function () {

    async function loadContent(url, elementId) {
        try {
            const element = document.getElementById(elementId);
            if (!element) {
                console.warn(`Element with ID "${elementId}" not found.`);
                return;
            }
  
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load ${url}`);
  
            const data = await response.text();
            element.innerHTML = data;
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
        }
    }
  
    // Load header and footer dynamically (New Paths)
    (async function () {
        await loadContent("/header.html", "nav"); // Load header into <nav>
        await loadContent("/Footer.html", "footer"); // Load footer into <footer>
    })();
  });
  