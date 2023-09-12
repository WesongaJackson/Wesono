// preloader
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".custom-preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 10000);
});
// get the full year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggleIcon = document.querySelector(".nav-toggle i");

navToggle.addEventListener("click", function () {
  // navToggle.classList.toggle("show-links");
  toggleIcon.classList.toggle("fa-times");

  navbar.classList.add("fixed-nav");
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    toggleIcon.classList.remove("fa-times");

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  const formControls = document.querySelectorAll(
    ".form-control input, .form-control textarea"
  );

  formControls.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.querySelector("label").classList.add("active");
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        input.parentElement.querySelector("label").classList.remove("active");
      }
    });
  });
});

// Send the email using EmailJS

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);

    emailjs
      .send(emailjsConfig.serviceID, emailjsConfig.templateID, formData)
      .then(function (response) {
        console.log("Email sent successfully!", response);
        alert(
          "Your message has been sent successfully! We'll get back to you soon."
        );
        form.reset();
      })
      .catch(function (error) {
        console.error("Email sending failed:", error);
        alert(
          "Oops! There was an error sending your message. Please try again later."
        );
      });
  });
});
