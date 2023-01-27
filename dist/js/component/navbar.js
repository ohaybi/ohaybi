class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const baseUrl = "https://ohaybi.github.io";
    this.innerHTML = `
    <div id="navbar" class="sticky top-0 flex items-center h-[10vh] z-50 w-full text-sm">
        <div class="nav-container">
            <div class="nav-brand">
                <a href="${baseUrl}"><h6 class="nav-brand-text hiding">AbdillahMufti</h6></a>
            </div>
            <div class="nav-link">
                <ul class="nav-link-list">
                <li>
                    <a href="${baseUrl}"><h6 class="nav-link-item hiding">Home</h6></a>
                </li>
                <li>
                    <a href="${baseUrl}/work"><h6 class="nav-link-item hiding">Work</h6></a>
                </li>
                <li>
                    <a href="${baseUrl}/freebies"><h6 class="nav-link-item hiding">Freebies 🔥</h6></a>
                </li>
                </ul>
            </div>
        </div>
    </div>
      `;
  }
}

customElements.define("nav-bar", NavBar);
