import generateFreebies from "./freebies.js";

class FreebiesSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="freebies" class="w-full py-20 md:py-32">
        <div class="container">
            <h1 class="text-3xl md:text-6xl text-center font-bold uppercase">
            Freebies
            <span class="text-base md:text-lg font-normal normal-case text-hitam-50"> / Free design assets</span>
            </h1>
            <div id="freebies-list" class="grid gap-x-2 gap-y-2 grid-cols-2 md:grid-cols-3 auto-rows-auto mt-10 overflow-hidden">
                <!-- Freebies Card Generated Here -->
            </div>
        </div>
    </div>
    `;

    generateFreebies();
  }
}

customElements.define("freebies-section", FreebiesSection);
