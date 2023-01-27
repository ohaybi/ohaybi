class ContactMe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const baseUrl = "https://ohaybi.github.io";
    this.innerHTML = `
    <div id="contact" class="w-full pt-1 pb-5 md:pt-2 md:pb-10 overflow-hidden">
    <div class="container">
      <div class="bg-gradient-to-t from-oren to-transparent text-putih px-10 py-10 md:py-20 rounded-b-2xl flex flex-col md:flex-row gap-y-5 gap-x-0 md:gap-y-0 md:gap-x-60 justify-between items-center hiding">
        <div class="self-start flex-1">
          <h1 class="text-3xl md:text-6xl font-bold text-left uppercase">
            LET'S <br />
            CREATE <br />
            SUPERB <br />
            PROJECT
          </h1>
        </div>
        <div class="w-full flex-auto">
          <a href="mailto:aabimufti@gmail.com" class="group flex justify-between items-center font-medium text-left border-b border-putih">
            <h3 class="text-xl md:text-4xl relative left-0 group-hover:left-5 duration-500 ease-in-out py-4 md:py-10">aabimufti@gmail.com</h3>
            <h3 class="fill-putih py-4 md:py-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 md:w-8 md:h-8">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" />
              </svg>
            </h3>
          </a>
          <a href="https://wa.me/+6285156027627" target="_blank" class="group flex justify-between items-center font-medium text-left border-b border-putih">
            <h3 class="py-4 md:py-10 text-lg md:text-4xl relative left-0 group-hover:left-5 duration-500 ease-in-out">+62 851 56027627</h3>
            <h3 class="fill-putih py-4 md:py-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 md:w-8 md:h-8">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" />
              </svg>
            </h3>
          </a>
        </div>
      </div>
    </div>
  </div>
        `;
  }
}

customElements.define("contact-me", ContactMe);
