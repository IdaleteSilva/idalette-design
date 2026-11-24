const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const menuAberto = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.textContent = menuAberto ? "✕" : "☰";

});

// FECHAR MENU APÓS CLICAR EM UM LINK

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// FORMULÁRIO

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = document.querySelector("#name").value.trim();

    feedback.textContent =
        'Obrigada, ${nome}! A equipe responsavel entrara em contato.';

    contactForm.reset();

});