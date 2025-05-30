var menuicon = document.getElementById("menuicon")
var  sidenav= document.getElementById("sidenav")
var  closenav= document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Searchbar
// var product = document.getElementById("ProductContainer")
// var Searchbar = document.getElementById("Searchbar")
// var productlist = product.querySelector("div")

// Searchbar.addEventListener("keyup",function(){
//     var Enteredvalue = event.target.value.toUpperCase()

//     for(i=0;i<productlist.length;i++){
//         var productname = productlist[i].querySelector("h1").textContent
//         if(productname.toUpperCase().indexOf(Enteredvalue)<0){
//             productlist[i].style.disply = "none"
//         }else{
//             productlist[i].style.disply = "block"
//         }
//     }
// })
var ProductContainer = document.getElementById("ProductContainer")

var search = document.getElementById("search")

var productList = ProductContainer.querySelectorAll("div")
console.log(productList)

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    // console.log(enteredvalue)

    for (count = 0; count < productList.length; count = count + 1) {

            var productname = productList[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productList[count].style.display = "none"
        }


        else {
            productList[count].style.display = "block"
        }
    }
})
