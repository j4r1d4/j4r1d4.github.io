class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <header>
        <div class="logo">
          <img src="images/luisadocura.png" />
        </div>
        <div class="menu">
          <a href="index.html">
            <i class="fa fa-fw fa-home"></i>
            Docinhos
          </a>
          <a href="contact.html">
          <i class="fa fa-fw fa-envelope"></i>
            Contato
          </a>
          <a class="btn-menu" href="cart.html">
            <i class="fa-solid fa-cart-shopping"></i>
            Carrinho <span id="carrinho_badge" class="badge">0</span>
          </a>
        </div><br>
      </header>
    `;
  }
}

customElements.define('header-component', Header);