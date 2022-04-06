const btn = document.querySelectorAll("button")

btn.forEach(function(button,index) {
button.addEventListener("click",function(event) {{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("H1").innerText
    var productPrice = product.querySelector("span").innerText
    addcart(productName, productPrice, productImg)
}})
 

})
function addcart(productName, productPrice, productImg) {
    var addtr = document.createElement("tr")
     var cartItem  = document.querySelectorAll("tbody tr")
    for (var i = 0; i<cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong giỏ")
            return
        }
    }   
    var trcontent = '<tr><td style="display:flex; align-items:center;"><img src="'+productImg+'"width="100" height="140"><span class="title">'+productName+'</span></td><td><p><span class="prires">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width:40px; outline: none;" type="text"></td><td><input style="width:30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delate">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody") 
    cartTable.append(addtr)
    carttotal()
}

function carttotal() {
    var cartItem  = document.querySelectorAll("tbody tr")
        var totalC = 0
    for (var i=0; i<cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prires").innerHTML
        totalA = inputValue*productPrice*1000
       totalC = totalC + totalA
    }

    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    

    function deleteCart() {
        var cartItem  = document.querySelectorAll("tbody tr")
        for (var i = 0; i<cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delate")
        productT[i].addEventListener("click", function(event){
            var cartDelate = event.target
            var cartitemR = cartDelate.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        
        })
        
    }
    
    }
    deleteCart() 
}
const cartbtn = document.querySelector(".fa-times-circle")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click", function(){
    document.querySelector(".cart").style.right ="0"
})
cartbtn.addEventListener("click", function(){
    document.querySelector(".cart").style.right ="-100%"
})
