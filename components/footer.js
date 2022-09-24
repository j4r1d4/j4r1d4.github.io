class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
        <p>Doçuras da Luísa, todos os direitos reservados</p>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);