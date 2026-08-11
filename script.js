const WHATSAPP_NUMBER = "254708102302";

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const nav = document.getElementById("nav");
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    // Loader
    window.setTimeout(() => {
        loader.classList.add("done");
    }, 2100);

    // Navbar appearance
    const updateNav = () => {
        nav.classList.toggle("scrolled", window.scrollY > 70);
    };
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    // Mobile navigation
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        menuBtn.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuBtn.classList.remove("active");
        });
    });

    // WhatsApp product ordering
    document.querySelectorAll(".order-link").forEach(link => {
        const product = link.dataset.product;

        const message =
            `Hello EVERGREEN EXOTIC, I am interested in your ${product}. Please provide more details on availability and price.`;

        link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        link.target = "_blank";
        link.rel = "noopener";
    });

    // Reveal animations
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
});
