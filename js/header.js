


     class chachaHeader extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `<div class="navvv">
          <div class="top-nav">
            <div><a class="logoText" href="index.html">ChaCha Restaurant</a></div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
            <ul class="menu">
              <li class="menuLi"><a href="index.html">HOME</a></li>
              <li class="menuLi"><a href="menu.html">MENU</a></li>
              <li class="menuLi"><a href="history.html">HISTORY</a>          </li>
              <li class="menuLi"><a href="contact.html">CONTACT</a></li>
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
    
   
    
  <!-- START HEADER -->
    <header  class="myContainer"> 
          <div class="menuWrapper">
              <div class="wrapper"> 
                            
                  <div class="left">
                      <li class="menuLi">
                          <ul><a class="menuBtn" href="index.html">HOME</a></ul>
                          <ul><a class="menuBtn" href="menu.html">MENU</a></ul>
                          <ul><a class="menuBtn" href="history.html">HISTORY</a></ul>
                          <ul><a class="menuBtn" href="contact.html">CONTACT</a></ul>
                      </li>
                  </div>
                  <div class="right">
                      <!-- START Make Reservation button + modal + overlay -->
                      <a class="buttonR" data-modal-target="#modal">MAKE RESERVATION</a>
                          <div class="mymodal" id="modal">
                            <div class="modal-header">
                              <div class="title">Contact Information</div>
                              <button data-close-button class="close-button">&times;</button>
                            </div>
                            <div class="modal-body">
                                  <P>Call: +46 707174030 </P>
                                  <p>E-mail: info@ChaCha.com </p>
                                  <a href="https://goo.gl/maps/QnEjWzULMKhH3H1b9">Address: Praça do Município n23, Lisboa, Portugal</a>
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6226.828782664931!2d-9.1496643!3d38.708294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193479567ac66d%3A0x3eef4fe30fcc5385!2sDelfina-Cantina%20Portuguesa!5e0!3m2!1sen!2sse!4v1679964565066!5m2!1sen!2sse" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                          </div>
                          <div id="overlay"></div>  
                      <!-- END Make Reservation button + modal + overlay  -->
                  </div>
              </div>
          </div>
    </header>
    <div class="undermenu"> </div>`;
        }
      }
          
      customElements.define('chacha-header', chachaHeader);