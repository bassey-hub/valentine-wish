document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log("Observed:", entry.target);
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            root: null, 
            threshold: 0.5, 
        }
    );

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});
