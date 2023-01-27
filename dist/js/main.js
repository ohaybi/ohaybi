import generateMeta from "./component/meta-tag.js";

const main = () => {
  generateMeta();

  // CTA Button
  const btnCta = document.getElementById("cta");
  const heroBox = document.getElementById("hero");
  if (heroBox != null) {
    const bodyRect = document.body.getBoundingClientRect();
    const heroBoxPosition = heroBox.getBoundingClientRect();
    btnCta.style.top = heroBoxPosition.top - bodyRect.top + heroBoxPosition.height + "px";
    btnCta.style.left = heroBoxPosition.right + "px";
  }

  // Preloader
  const coverHitam = document.getElementById("cover-hitam");
  const coverOren = document.getElementById("cover-oren");

  window.addEventListener("load", vanish);

  function vanish() {
    coverHitam.classList.add("dissapear-1");
    coverOren.classList.add("dissapear-2");

    // Animate on Scroll
    const observer = new IntersectionObserver((e) => {
      e.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("showing");
        }
      });
    });

    const hiddenElementFull = document.querySelectorAll(".hiding");
    hiddenElementFull.forEach((el) => observer.observe(el));
  }
};

export default main;
