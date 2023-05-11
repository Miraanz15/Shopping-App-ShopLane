document.addEventListener("DOMContentLoaded", function(){
  
 /*Creating Cart quantity object and storing in local storage */
  let cartObj = {
    cart: '0'
  };
  var cartObjStr = JSON.stringify(cartObj);
  localStorage.setItem('totalQty', cartObjStr);

 /*Creating Cart quantity object and storing in local storage Ends*/

/* Getting cart quantity from local storage */
 var cartObjFromLocal = localStorage.getItem('totalQty');
 var cartObjFromLocalParsed = JSON.parse(cartObjFromLocal);
 var totalQty = cartObjFromLocalParsed.cart;
/* Getting cart quantity from local storage Ends*/




  async function getData() {
    try {
    const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
    const data = await response.json();
       // storing JSON data in local storage
       const jsonData = JSON.stringify(data);   // convert JSON data to a string
       localStorage.setItem('shopLaneAppData', jsonData);   // store the string in local storage
       console.log("API Data stored in Local Storage");

       var clothingSection = document.getElementById("clothingSection");
       var accessoriesSection = document.getElementById("accessoriesSection");

      for (var i = 0; i < data.length; i++) {
        var product = data[i];

        var card = document.createElement("a");
        card.href = "http://127.0.0.1:5500/productDetails.html?value="+ product.id;
        card.classList.add("card");
        let varr = product.id;
        card.setAttribute('id', varr);

        var img = document.createElement("img");
        img.src = product.preview;
        img.classList.add("image");

        var info = document.createElement("div");
        info.classList.add("info");

        var productName = document.createElement("h3");
        productName.innerText = product.name;
        productName.classList.add("name");

        var brand = document.createElement("span");
        brand.innerText = product.brand;
        brand.classList.add("brand");

        var price = document.createElement("h4");
        price.innerText = "Rs " + product.price;
        price.classList.add("price");

        info.append(productName, brand, price);

        card.append(img, info);

        if (product.isAccessory === true) {
          accessoriesSection.append(card);
        } else {
          clothingSection.append(card);
        }
      }
    }
  catch(error) {
    // Handle any errors here
    console.error(error);
  };
}
  
getData();  // function calling the API 

/* Adding extra key-value pair for quantity of each item added to cart */
var arrayStr = localStorage.getItem('shopLaneAppData');
var arrayObj = JSON.parse(arrayStr);

arrayObj.forEach(function(obj) {
  // Add new key-value pair to each object
  obj.quantity = '0';
});

var updatedArrayStr = JSON.stringify(arrayObj);
localStorage.setItem('shopLaneAppDataUpdated', updatedArrayStr);   //storing the updated JSON back to local storage

/* Adding extra key-value pair for quantity of each item added to cart Ends*/


 /* Header starts*/
  var head = document.getElementById("head");

  var compName = document.createElement("a");
  compName.id = "compName";
  compName.href = "#";
  compName.innerHTML = `SHOP<span>LANE</span>`;
  
  var shoppingHeader = document.createElement("div");
  shoppingHeader.id = "shoppingHeader";

  var shoppingHeaderClothing = document.createElement("a");
  shoppingHeaderClothing.classList.add("shoppingHeaderCommon");
  shoppingHeaderClothing.href = "#clothesHeading";
  shoppingHeaderClothing.innerHTML = `CLOTHING`;

  var shoppingHeaderAccessories = document.createElement("a");
  shoppingHeaderAccessories.classList.add("shoppingHeaderCommon");
  shoppingHeaderAccessories.href = "#accessHeading"; 
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
  // var totalQty = 0;   -> declared above
  const elementVar = document.getElementsByClassName("badge");
  let index = 0;
  while (index < elementVar.length) {
  elementVar[index].setAttribute("value", totalQty);
  index++;
  } 
  /*Cart quantity Ends*/

   /* Header Ends*/

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
      firstColA.href = "#clothesHeading";

      var firstColB = document.createElement("a");
      firstColB.classList.add("footerTopics");
      firstColB.innerHTML = `WOMEN CLOTHING`;
      firstColB.href = "#clothesHeading";

      var firstColC = document.createElement("a");
      firstColC.classList.add("footerTopics");
      firstColC.innerText = `MEN ACCESSORIES`;
      firstColC.href = "#accessHeading";

      var firstColD = document.createElement("a");
      firstColD.classList.add("footerTopics");
      firstColD.innerText = `WOMEN ACCESSORIES`;
      firstColD.href = "#accessHeading";

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
       secondColA.href = "#";
 
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
   

   
   const searchInput = document.getElementById('searchItem');
   

  // const cardsSearch = document.getElementById('clothingSection');
  
   
   const cardsItem = document.getElementsByClassName('card');
   
   

   
   /* setTimeout(function() {
      for (let i = 0; i < cardsItem.length; i++) {
        const item = cardsItem[i];
      console.log(item.innerText.toLowerCase());
    }
  }, 3000); */
    
   

   // const storedData = localStorage.getItem('apiData');  // getting JSON from localstorage
   // const jsonData = JSON.parse(storedData); // convert the string back to a JavaScript object
   // console.log(jsonData);

  // let len = jsonData.length;   //length of JSON Object

    
     searchInput.addEventListener('input', function(event) {
      const searchValue = event.target.value.toLowerCase();
      console.log(searchValue);
      // if(event.keyCode === 13){
       
   
        setTimeout(function() {
     // Loop through all items and hide/show based on search value
     for (let i = 0; i < cardsItem.length; i++) {
       const item = cardsItem[i];
       const itemValue = item.innerText.toLowerCase();
      

       if (itemValue.includes(searchValue)) {
          item.style.display = 'inline-block';
        // continue;
       } else {
          item.style.display = 'none';
         // item.classList.add("hideItem");
       }
     }
    }, 1000);
    // }
   }); 
   


  });  // End of DOMContentLoaded Event Listener

  
