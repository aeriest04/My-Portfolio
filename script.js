const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // stop observing once revealed to avoid repeated work
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18, rootMargin: "-30px 0px" }
);

sections.forEach((section) => observer.observe(section));