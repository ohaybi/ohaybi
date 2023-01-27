class CoverLoader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="cover-oren"></div>
    <div id="cover-hitam">
      <h1 class="text-oren text-md animate-pulse font-semibold text-lg">Loading...</h1>
    </div>
    `;
  }
}

customElements.define("cover-loader", CoverLoader);
