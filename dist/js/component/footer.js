import socialMediaData from "./../data/social-media.js";

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const baseUrl = "https://ohaybi.github.io";
    this.innerHTML = `
    <div id="footer" class="w-full">
      <div class="container">
        <div class="flex flex-col md:flex-row justify-between border-t border-hitam-50 py-5 md:py-10">
          <div class="self-center md:self-start py-2">
            <a href="${baseUrl}"><h6 class="text-[10px] md:text-base font-medium relative hover:scale-90 duration-700 ease-in-out">Download CV</h6></a>
          </div>
          <div class="self-center md:self-end flex gap-x-4">
            <a href="https://www.instagram.com/ohaybi/" target="_blank"><h6 class="text-[10px] md:text-base font-medium relative hover:scale-90 duration-700 ease-in-out">Instagram</h6></a>
            <a href="https://dribbble.com/ohaybi/" target="_blank"><h6 class="text-[10px] md:text-base font-medium relative hover:scale-90 duration-700 ease-in-out">Dribbble</h6></a>
            <a href="https://behance.net/ohaybi/" target="_blank"><h6 class="text-[10px] md:text-base font-medium relative hover:scale-90 duration-700 ease-in-out">Behance</h6></a>
            <a href="https://pinterest.com/ohaybi/" target="_blank"><h6 class="text-[10px] md:text-base font-medium relative hover:scale-90 duration-700 ease-in-out">Pinterest</h6></a>
            <a href="https://github.com/ohaybi" target="_blank"><h6 class="text-[10px] md:text-base font-medium relative hover:scale-90 duration-700 ease-in-out">Github</h6></a>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define("footer-section", Footer);
