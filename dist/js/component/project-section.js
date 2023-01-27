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
        <h1 class="text-3xl md:text-6xl text-center font-bold uppercase sticky top-1 pb-5">
        Work
        <span class="text-base md:text-lg font-normal normal-case text-hitam-50"> / Selected Projects</span>
        </h1>
        <h3 class="pb-3 opacity-50">Front-End Project</h3>
        <div id="fe-project-list" class="grid gap-x-10 gap-y-10 grid-cols-1 md:grid-cols-2 auto-rows-auto pt-5 pb-16 border-t border-putih/50">
            <!-- FE Project Card Generated Here -->
        </div>

        <h3 class="pb-3 opacity-50">UI Design Project</h3>
        <div id="ui-project-list" class="grid gap-x-10 gap-y-10 grid-cols-1 md:grid-cols-2 auto-rows-auto pt-5 border-t border-putih/50">
            <!-- UI Project Card Generated Here -->
        </div>
        </div>
    </div>
    `;

    generateProject();
  }
}

customElements.define("project-section", ProjectSection);
