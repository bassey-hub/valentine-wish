document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log("Observed:", entry.target); // Debug: log each observed element
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing
                }
            });
        },
        {
            root: null, // Default to viewport
            threshold: 0.5, // Trigger when 50% of the element is visible
        }
    );

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});
