document.addEventListener("DOMContentLoaded", function(){   
   
   async function getData() {
     try {

          const queryParams = new URLSearchParams(location.search);   //to get data from URL
          const value = queryParams.get("value");              //Getting the id of card from Home Page
     
          /* Getting cart quantity from local storage */
          let cartObjFromLocal = localStorage.getItem('totalQty');
          let cartObjFromLocalParsed = JSON.parse(cartObjFromLocal);
          let totalQty = cartObjFromLocalParsed.cart;   
          totalQty = parseInt(totalQty);       //Total Cart Quantity
     
          /* Getting cart quantity from local storage Ends*/
         
          console.log("Item Id selected = " + value);
          console.log("Total Cart Quantity at present = " + totalQty);
          
     /* API Call */     
     const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
     const data = await response.json();   //API Object Data
      /* API Call Ends*/ 



      /* Header starts*/
    var head = document.getElementById("head");

    var compName = document.createElement("a");
    compName.id = "compName";
    compName.href = "index.html";
    compName.innerHTML = `SHOP<span>LANE</span>`;

    var shoppingHeader = document.createElement("div");
    shoppingHeader.id = "shoppingHeader";

    var shoppingHeaderClothing = document.createElement("a");
    shoppingHeaderClothing.classList.add("shoppingHeaderCommon");
    shoppingHeaderClothing.href = "index.html";
    shoppingHeaderClothing.innerHTML = `CLOTHING`;

    var shoppingHeaderAccessories = document.createElement("a");
    shoppingHeaderAccessories.classList.add("shoppingHeaderCommon");
    shoppingHeaderAccessories.href = "index.html"; 
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
    cartParent.href = "checkOut.html";
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
    elementVar[index].setAttribute("value", totalQty);
    index++;
    } 
    /*Cart quantity Ends*/

  /* Header Ends*/


      /*Body Starts */
       var container = document.getElementById("container");

       for (var i = 0; i < data.length; i++) {
         var productData = data[i];
       if(productData.id === value){
       var leftContainer = document.createElement("div");
       leftContainer.classList.add("left");
      var imgLeftContainer = document.createElement("img");
       imgLeftContainer.classList.add("leftImage");
       imgLeftContainer.src = productData.preview;
      leftContainer.append(imgLeftContainer);


      var rightContainer = document.createElement("div");
         rightContainer.classList.add("right");


      var productName = document.createElement("h1");
           productName.innerText = productData.name;
           productName.classList.add("name");
      var productBrand = document.createElement("h3");
           productBrand.innerText = productData.brand;
           productBrand.classList.add("brand"); 

      var priceDiv = document.createElement("div");
          priceDiv.classList.add("priceDiv");  
      var productPrice = document.createElement("h3");
           productPrice.innerText = "Price: Rs ";
           productPrice.classList.add("priceRs");    
      var priceAmount = document.createElement("h3");   
          priceAmount.innerText = productData.price; 
          priceAmount.classList.add("priceAmount");
      priceDiv.append(productPrice, priceAmount)

      var productDescriptionHeading = document.createElement("h3");
           productDescriptionHeading.innerText = "Description";
           productDescriptionHeading.classList.add("descriptionHeading");
      var productDescription = document.createElement("h4");
           productDescription.innerText = productData.description;
           productDescription.classList.add("description");
      var productPreviewHeading = document.createElement("h3");
           productPreviewHeading.innerText = "Product Preview";

      function onImgClick(e) {
        imgLeftContainer.src = e.target.src;
        var activeElement = document.getElementsByClassName("active");
        activeElement[0].classList.remove("active");
        e.target.classList.add("active");
        }

      var imgsContainer = document.createElement("div");   
          imgsContainer.classList.add("imgsContainer"); 
      for (var i = 0; i < productData.photos.length; i++) {
           var img = document.createElement("img");
           img.src = productData.photos[i];
           img.classList.add("image"); 
           img.id = i;
           if(i == 0){
            img.classList.add("active");
           }
           img.addEventListener('click', onImgClick);
           imgsContainer.append(img);
         }

      var addButton = document.createElement("button");
           addButton.innerText = "Add to Cart";
           addButton.id = "addButton";




      rightContainer.append(productName, productBrand, priceDiv, productDescriptionHeading, productDescription, productPreviewHeading, imgsContainer, addButton);



       container.append(leftContainer, rightContainer);
       break;
     }
     }
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
       firstColA.href = "index.html";

       var firstColB = document.createElement("a");
       firstColB.classList.add("footerTopics");
       firstColB.innerHTML = `WOMEN CLOTHING`;
       firstColB.href = "index.html";

       var firstColC = document.createElement("a");
       firstColC.classList.add("footerTopics");
       firstColC.innerText = `MEN ACCESSORIES`;
       firstColC.href = "index.html";

       var firstColD = document.createElement("a");
       firstColD.classList.add("footerTopics");
       firstColD.innerText = `WOMEN ACCESSORIES`;
       firstColD.href = "index.html";

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
        secondColA.href = "index.html";

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


     /*Functionality Starts*/

    
    /* Adding event listener to Add button and updating Cart value and respective Item quantity in LocalStorage */
      
    let addBtn = document.getElementById('addButton');
   
    
    function onAddButtonClick() {
     // Code to execute when the button is clicked
     var arrayStr = localStorage.getItem('shopLaneAppData');
     var arrayObj = JSON.parse(arrayStr);
     const key = 'quantity';
    // arrayObj.forEach(function(obj) {
     for (var i = 0; i < arrayObj.length; i++) { 
       // Add new key-value pair to each object
       if(arrayObj[i].id == value){
          if(arrayObj[i].hasOwnProperty(key)){
               let val = arrayObj[i].quantity;
               val = parseInt(val);
               val += 1;
               arrayObj[i].quantity = `${val}`;
               break;
          }
          else{
               arrayObj[i].quantity = '1';
          }
          
       }
     }
     var updatedArrayItems = JSON.stringify(arrayObj);
     localStorage.setItem('shopLaneAppData', updatedArrayItems);   //storing the updated JSON back to local storage 

     /*Updating Cart Quantity in Local Storage */
     totalQty += 1;
     cartObjFromLocalParsed.cart = totalQty;
     var updatedArrayCart = JSON.stringify(cartObjFromLocalParsed);
     localStorage.setItem('totalQty', updatedArrayCart);
      /*Updating Cart Quantity in Local Storage Ends*/

     /*Updating  Cart quantity on WebPage*/
    // var totalQty = 0;  -> declared above
    const elementVar = document.getElementsByClassName("badge");
    let index = 0;
    while (index < elementVar.length) {
    elementVar[index].setAttribute("value", totalQty);
    index++;
    } 
    /*Updating  Cart quantity on WebPage Ends*/

   };  //onAddButtonClick Ends
   addBtn.addEventListener('click', onAddButtonClick);  

    /* Adding event listener to Add button and updating Cart value and respective Item quantity in LocalStorage Ends*/


  /*Functionality Ends*/

     }  // try ends

   catch(error) {
     // Handle any errors here
     console.error("API error", error);
   };
 }    //Ends of getData() function Call

getData();  // function calling the API 


});    // End of DOMContentLoaded Event Listener


