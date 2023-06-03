document.addEventListener("DOMContentLoaded", function(){   
   
    async function getData() {
      try {
 
           /* Getting cart quantity from local storage */
           let cartObjFromLocal = localStorage.getItem('totalQty');
           let cartObjFromLocalParsed = JSON.parse(cartObjFromLocal);
           let totalQty = cartObjFromLocalParsed.cart;   
           totalQty = parseInt(totalQty);       //Total Cart Quantity
      
           /* Getting cart quantity from local storage Ends*/

           /*Setting Cart quantity in local storage to 0 Starts*/

           totalQty = 0;
           cartObjFromLocalParsed.cart = totalQty;
           var updatedArrayCart = JSON.stringify(cartObjFromLocalParsed);
           localStorage.setItem('totalQty', updatedArrayCart);
           /*Setting Cart quantity in local storage to 0 Ends*/

           /*Deleting local storage items list from local storage Starts*/
           localStorage.removeItem('shopLaneAppData');
           localStorage.removeItem('totalQty');
           /*Deleting local storage items list from local storage Ends*/
           
      /* API Call */     
      const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
      const data = await response.json();   //API Object Data
       /* API Call Ends*/ 
 
 
 
       /* Header starts*/
     var head = document.getElementById("head");
 
     var compName = document.createElement("a");
     compName.id = "compName";
     compName.href = "http://127.0.0.1:5500/";
     compName.innerHTML = `SHOP<span>LANE</span>`;
 
     var shoppingHeader = document.createElement("div");
     shoppingHeader.id = "shoppingHeader";
 
     var shoppingHeaderClothing = document.createElement("a");
     shoppingHeaderClothing.classList.add("shoppingHeaderCommon");
     shoppingHeaderClothing.href = "http://127.0.0.1:5500/";
     shoppingHeaderClothing.innerHTML = `CLOTHING`;
 
     var shoppingHeaderAccessories = document.createElement("a");
     shoppingHeaderAccessories.classList.add("shoppingHeaderCommon");
     shoppingHeaderAccessories.href = "http://127.0.0.1:5500/"; 
     shoppingHeaderAccessories.innerHTML = `ACCESSORIES`;
 
     shoppingHeader.append(shoppingHeaderClothing, shoppingHeaderAccessories);
 
 
 
     /* Header Search Starts */
     var searchTeam = document.createElement("div");
     searchTeam.classList.add("search-container");
 
     var write = document.createElement("input");
     write.type="search";
     write.placeholder="Search for Clothing and Accessories";
     write.name="searchItem";
     write.id = "searchItem";
     /* Header Search Ends */
 
 
     var cartParent = document.createElement("a");
     cartParent.href = "#";
     cartParent.id = "cartParent";
     var cartIcon = document.createElement("i");
     cartIcon.classList.add("fa");
     cartIcon.classList.add("fa-shopping-cart");
     cartIcon.classList.add("badge");
     cartIcon.id = "cartIcon";
     cartParent.append(cartIcon);
 
     var profileIcon = document.createElement("i");
     profileIcon.classList.add("fa-solid");
     profileIcon.classList.add("fa-user");
     profileIcon.id = "profileIcon";
 
 
     head.append(compName, shoppingHeader, write, cartParent, profileIcon);
 
      /* Cart quantity */
     // var totalQty = 0;  -> declared above
     const elementVar = document.getElementsByClassName("badge");
     let index = 0;
     while (index < elementVar.length) {
     elementVar[index].setAttribute("value", 0);
     index++;
     } 
     /*Cart quantity Ends*/
 
   /* Header Ends*/

  /*Body Starts*/
      var pageBody = document.getElementById("pageBody");
      
      var tick = document.createElement("div");
      tick.id = "tick";

      var tickMark = document.createElement("img");
      tickMark.id = "tickMark";
      tickMark.src = src="tickMark.jpg";
      tickMark.alt = "tickMark";

      tick.append(tickMark);

      var ordered = document.createElement("div");
      ordered.id = "ordered";
      ordered.innerText = "Order Placed Successfully!!";

      var orderMail = document.createElement("div");
      orderMail.id = "orderMail";
      orderMail.innerText = "We have sent you an email with the order details";

      pageBody.append(tick, ordered, orderMail);
  /*Body Ends */



 
      
        /*Footer Starts */
 
        var foot = document.getElementById("baseFooter");
 
        /* First Column Starts*/
        var firstCol = document.createElement("div");
        firstCol.classList.add("footerColumns");
 
        var firstColHeading = document.createElement("h4");
        firstColHeading.classList.add("footerHeading");
        firstColHeading.innerText = `ONLINE STORE`;
 
        var firstColA = document.createElement("a");
        firstColA.classList.add("footerTopics");
        firstColA.innerHTML = `MEN CLOTHING`;
        firstColA.href = "http://127.0.0.1:5500/";
 
        var firstColB = document.createElement("a");
        firstColB.classList.add("footerTopics");
        firstColB.innerHTML = `WOMEN CLOTHING`;
        firstColB.href = "http://127.0.0.1:5500/";
 
        var firstColC = document.createElement("a");
        firstColC.classList.add("footerTopics");
        firstColC.innerText = `MEN ACCESSORIES`;
        firstColC.href = "http://127.0.0.1:5500/";
 
        var firstColD = document.createElement("a");
        firstColD.classList.add("footerTopics");
        firstColD.innerText = `WOMEN ACCESSORIES`;
        firstColD.href = "http://127.0.0.1:5500/";
 
        firstCol.append(firstColHeading, firstColA, firstColB, firstColC, firstColD);
 
        foot.append(firstCol);
         /* First Column Ends*/
 
         /* Second Column Starts*/
         var secondCol = document.createElement("div");
         secondCol.classList.add("footerColumns");
 
         var secondColHeading = document.createElement("h4");
         secondColHeading.classList.add("footerHeading");
         secondColHeading.innerText = `HELPFUL LINKS`;
 
         var secondColA = document.createElement("a");
         secondColA.classList.add("footerTopics");
         secondColA.innerHTML = `HOME`;
         secondColA.href = "http://127.0.0.1:5500/";
 
         var secondColB = document.createElement("a");
         secondColB.classList.add("footerTopics");
         secondColB.innerHTML = `ABOUT`;
         secondColB.href = "#";
 
         var secondColC = document.createElement("a");
         secondColC.classList.add("footerTopics");
         secondColC.innerText = `CONTACTS`;
         secondColC.href = "#";
 
         secondCol.append(secondColHeading, secondColA, secondColB, secondColC);
 
         foot.append(secondCol);
         /* Second Column Ends*/
 
         /* Third Column Starts*/
         var thirdCol = document.createElement("div");
         thirdCol.classList.add("footerColumns");
 
         var thirdColHeading = document.createElement("h4");
         thirdColHeading.classList.add("footerHeading");
         thirdColHeading.innerText = `PARTNERS`;
 
         var thirdColA = document.createElement("a");
         thirdColA.classList.add("footerTopics");
         thirdColA.innerHTML = `ZARA`;
         thirdColA.href = "https://www.zara.com/in/";
         thirdColA.target = "_blank";
 
         var thirdColB = document.createElement("a");
         thirdColB.classList.add("footerTopics");
         thirdColB.innerHTML = `PANTALOONS`;
         thirdColB.href = "https://www.pantaloons.com/";
         thirdColA.target = "_blank";
 
         var thirdColC = document.createElement("a");
         thirdColC.classList.add("footerTopics");
         thirdColC.innerText = `LEVIS`;
         thirdColC.href = "https://www.levi.in/";
         thirdColA.target = "_blank";
 
         var thirdColD = document.createElement("a");
         thirdColD.classList.add("footerTopics");
         thirdColD.innerText = `UCB`;
         thirdColD.href = "https://in.benetton.com/";
         thirdColA.target = "_blank";
 
         var thirdColE = document.createElement("a");
         thirdColE.classList.add("footerTopics");
         thirdColE.innerText = `+ MANY MORE`;
         thirdColE.href = "#";
 
         thirdCol.append(thirdColHeading, thirdColA, thirdColB, thirdColC, thirdColD, thirdColE);
 
         foot.append(thirdCol);
         /* Third Column Ends*/
 
         /* Fourth Column Starts */
         var fourthCol = document.createElement("div");
         fourthCol.classList.add("footerColumns");
 
         var fourthColHeading = document.createElement("h4");
         fourthColHeading.classList.add("footerHeading");
         fourthColHeading.innerText = `ADDRESS`;
 
         var fourthColA = document.createElement("span");
         fourthColA.classList.add("footerTopics");
         fourthColA.innerHTML = `BUILDING 101`;
 
         var fourthColB = document.createElement("span");
         fourthColB.classList.add("footerTopics");
         fourthColB.innerHTML = `CENTRAL AVENUE`;
 
         var fourthColC = document.createElement("span");
         fourthColC.classList.add("footerTopics");
         fourthColC.innerText = `LA - 902722`;
 
         var fourthColD = document.createElement("span");
         fourthColD.classList.add("footerTopics");
         fourthColD.innerText = `UNITED STATES`;
 
 
         fourthCol.append(fourthColHeading, fourthColA, fourthColB, fourthColC, fourthColD);
 
         foot.append(fourthCol);
         /* Fourth Column Ends */
 
     /*Footer Ends */
 
 
      
   
 
      }  // try ends
 
    catch(error) {
      // Handle any errors here
      console.error("API error", error);
    };
  }    //Ends of getData() function Call
 
 getData();  // function calling the API 
 
 
 });    // End of DOMContentLoaded Event Listener
 
 
 