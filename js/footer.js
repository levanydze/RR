class chachaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  
      <div class="subscribeDiv">
  <div class="subscribeText"><h4>Subscribe If You Want To Be Updated For Events And News</h4></div>
 <div class="subscribeWrapper">
  <form action="https://formspree.io/f/xrgvyekn"method="POST">
    <label> <input class="subscribeInput" type="email" name="email" placeholder="Your Email .."> </label>
    <button class="subscribeButton" type="submit">Send</button>
    </form>
 </div>
</div>
<footer class="footer">
  <div class="footerWrapp">
    <div class="footerSections">
      <div class="sectionAddress sec">
        <h4>VuvuLeo</h4>
        <p> Praça do Município n23, </p>
        <p>Lisboa, Portugal</p>
        <p>info@VuvuLeo.com</p>
        <p>0707174030</p>
      </div>
      <div class="section sec empty">
      
      </div>
      <div class="section sec">
        <h4>Working Hourss</h4>
        <p>MON – <span> Fri: 7.00am – 6.00pm </span> </p>   
        <p>SAT – <span> Fri: 7.00am – 6.00pm </span> </p>   
        <p>SUN – <span> Fri: 8.00am – 6.00pm </span> </p> 
      </div>
      <div class="section sec">
        <h4>Follow us</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Yelp</p>
        <p>made by Levanidze</p>
      </div>
    </div>
  </div>
</footer>
      
      `;
  }
}

customElements.define("chacha-footer", chachaFooter);
