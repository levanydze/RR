class chachaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="navvv">
          <div class="top-nav">
            <div><a class="logoText" href="index.html">VuvuLeo</a></div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
            <ul class="menu">
              <li class="menuLi"><a href="index.html">HOME</a></li>
              <li class="menuLi"><a href="history.html">MENU</a>          </li>
              <li class="menuLi"><a href="menu.html">CONTACT</a></li>
              <li class="menuLi"><a href="reservation.html">MAKE BOOKING</a></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
              <li style=" border: none;" class="menuLi"></li>
            </ul>
          </div>
    </div>
<!-- END BURGER BAR -->

<!--Start  Modal -->
    <div class="reservation-modal-bg">
      <div class="res-modal">
      <div class="res-close-btn">&times;</div>
        <div class="res-modal-head"><h4>Contact Information</h4></div>
        <div class="res-modal-boday"><p>Call: +46 707174030 </p><p>E-mail: info@VuvuLeo.com </p><p>Address: Praça do Município n23, Lisboa, Portugal</p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6226.828782664931!2d-9.1496643!3d38.708294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193479567ac66d%3A0x3eef4fe30fcc5385!2sDelfina-Cantina%20Portuguesa!5e0!3m2!1sen!2sse!4v1679964565066!5m2!1sen!2sse" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
    </div>
<!-- END MODAL -->



<!-- START HEADER -->
    <header  class="myContainer"> 
          <div class="menuWrapper">
              <div class="wrapper"> 
                  <div class="left">
                      <li class="menuLi">
                          <ul><a class="menuBtn" href="index.html">HOME</a></ul>
                          <ul><a class="menuBtn" href="menu.html">MENU</a></ul>
                          <ul><a class="menuBtn" href="contact.html">CONTACT</a></ul>
                      </li>
                  </div>
                  <div class="right">
                      <a class="reserv-button res-button" >MAKE RESERVATION</a>
                          
                  </div>
              </div>
          </div>
    </header>
    <div class="undermenu"> </div>`
  }
}

customElements.define("chacha-header", chachaHeader)
