import generateProject from "./project.js";

class ProjectSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="project" class="w-full py-20 md:py-32">
        <div class="container">
        <h1 class="text-3xl md:text-6xl text-center font-bold uppercase sticky top-1">
        Work
        <span class="text-base md:text-lg font-normal normal-case text-hitam-50"> / Selected Projects</span>
        </h1>
        <div id="project-list" class="grid gap-x-10 gap-y-10 grid-cols-1 md:grid-cols-2 auto-rows-auto mt-10">
            <!-- Project Card Generated Here -->
        </div>
        </div>
    </div>
    `;

    generateProject();
  }
}

customElements.define("project-section", ProjectSection);
