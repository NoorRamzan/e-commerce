//const product = fetch('https://fakestoreapi.com/products')
let productDiv= document.querySelector(".product");

async function product_func(){
    try{
        // productDiv.innerHTML='';
        const data = await fetch('https://fakestoreapi.com/products')
        //console.log(data)
        const jsonData = await data.json();
        //  console.log(jsonData)
        jsonData.forEach(element => {
            productDiv.innerHTML+= `<div class="product">
        <div class="productItems">
            <img src="${element.image}" alt="">
            <p> price RS. ${element.price} | ${element.rating.rate}</p>
            <h3>${element.title}</h3>
        </div>
      </div>`;
       });
        
    }
    catch(err){
        console.log(err)
    }
}
product_func();


