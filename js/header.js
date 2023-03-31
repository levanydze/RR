


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
                      <a class="res-btn" ">MAKE RESERVATION</a>
                          
                  </div>
              </div>
          </div>
    </header>
    <div class="undermenu"> </div>`;
        }
      }
          
      customElements.define('chacha-header', chachaHeader);