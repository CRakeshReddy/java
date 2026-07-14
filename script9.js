//  Task 1: Product Search (Easy)

// const products = [
//     { id: 1, title: "Laptop", price: 50000 },
//     { id: 2, title: "Mobile", price: 20000 },
//     { id: 3, title: "Headphones", price: 2500 },
//     { id: 4, title: "Keyboard", price: 1500 },
//     { id: 5, title: "Mouse", price: 800 }
// ];

// const productContainer = document.getElementById("products");
// const searchInput = document.getElementById("search");

// function displayProducts(items) {
//     productContainer.innerHTML = "";

//     if (items.length === 0) {
//         productContainer.innerHTML = "<h3>No Products Found</h3>";
//         return;
//     }

//     items.forEach(product => {
//         productContainer.innerHTML += `
//             <div>
//                 <h3>${product.title}</h3>
//                 <p>Price: ₹${product.price}</p>
//                 <hr>
//             </div>
//         `;
//     });
// }

// displayProducts(products);

// searchInput.addEventListener("keyup", function () {
//     const searchText = searchInput.value.toLowerCase();

//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(searchText)
//     );

//     displayProducts(filteredProducts);
// });




// Task 2: Product Categories (Medium)

// const products = [
//   {
//     id: 1,
//     title: "Men T-Shirt",
//     category: "men's clothing",
//     price: 799
//   },
//   {
//     id: 2,
//     title: "Women's Dress",
//     category: "women's clothing",
//     price: 1499
//   },
//   {
//     id: 3,
//     title: "Gold Ring",
//     category: "jewelery",
//     price: 8999
//   },
//   {
//     id: 4,
//     title: "Laptop",
//     category: "electronics",
//     price: 55000
//   },
//   {
//     id: 5,
//     title: "Men Jeans",
//     category: "men's clothing",
//     price: 1299
//   },
//   {
//     id: 6,
//     title: "Women's Handbag",
//     category: "women's clothing",
//     price: 1999
//   }
// ];

// const productContainer = document.getElementById("products");

// function displayProducts(items) {
//     productContainer.innerHTML = "";

//     items.forEach(product => {
//         productContainer.innerHTML += `
//             <div>
//                 <h3>${product.title}</h3>
//                 <p>Category: ${product.category}</p>
//                 <p>Price: ₹${product.price}</p>
//                 <hr>
//             </div>
//         `;
//     });
// }

// function filterProducts(category) {

//     if (category === "All") {
//         displayProducts(products);
//         return;
//     }

//     const filtered = products.filter(product =>
//         product.category === category
//     );

//     displayProducts(filtered);
// }

// displayProducts(products);




// Task 3: Price Sorting (Medium)

// const products = [
//   {
//     id: 1,
//     title: "Laptop",
//     price: 55000
//   },
//   {
//     id: 2,
//     title: "Mobile",
//     price: 25000
//   },
//   {
//     id: 3,
//     title: "Headphones",
//     price: 2500
//   },
//   {
//     id: 4,
//     title: "Keyboard",
//     price: 1500
//   },
//   {
//     id: 5,
//     title: "Mouse",
//     price: 800
//   }
// ];

// const productContainer = document.getElementById("products");

// function displayProducts(items) {
//     productContainer.innerHTML = "";

//     items.forEach(product => {
//         productContainer.innerHTML += `
//             <div>
//                 <h3>${product.title}</h3>
//                 <p>Price: ₹${product.price}</p>
//                 <hr>
//             </div>
//         `;
//     });
// }

// displayProducts(products);

// function sortLowToHigh() {
//     const sortedProducts = [...products].sort((a, b) => a.price - b.price);
//     displayProducts(sortedProducts);
// }

// function sortHighToLow() {
//     const sortedProducts = [...products].sort((a, b) => b.price - a.price);
//     displayProducts(sortedProducts);
// }




// Task 4: Product Details Popup (Medium-Hard)

// const products = [
// {
// id:1,
// title:"Laptop",
// price:55000,
// description:"High performance laptop for office and gaming.",
// category:"electronics",
// rating:4.8,
// image:"https://img.magnific.com/premium-photo/laptop-with-rainbow-colored-screen-that-says-triangle-bottom_948904-436.jpg"
// },
// {
// id:2,
// title:"Headphones",
// price:2500,
// description:"Wireless Bluetooth headphones with deep bass.",
// category:"electronics",
// rating:4.5,
// image:"https://m.media-amazon.com/images/I/71wJqHHazrL.jpg"
// },
// {
// id:3,
// title:"Gold Ring",
// price:12000,
// description:"22K Gold Ring for special occasions.",
// category:"jewelery",
// rating:4.7,
// image:"https://assets.angara.com/ring/sr1298d/5.1mm-ki3-diamond-yellow-gold-ring.jpg"
// }
// ];

// const container=document.getElementById("products");

// function displayProducts(){

// container.innerHTML="";

// products.forEach(product=>{

// container.innerHTML+=`
// <div class="card">

// <img
// src="${product.image}"
// data-id="${product.id}"
// >

// <h3>${product.title}</h3>

// <p>₹${product.price}</p>

// </div>
// `;

// });

// }

// displayProducts();

// const modal=document.getElementById("modal");

// container.addEventListener("click",function(e){

// if(e.target.tagName==="IMG"){

// const id=e.target.dataset.id;

// const product=products.find(p=>p.id==id);

// document.getElementById("modalImage").src=product.image;
// document.getElementById("modalImage").height=200;

// document.getElementById("modalTitle").textContent=product.title;

// document.getElementById("modalDescription").textContent=product.description;

// document.getElementById("modalPrice").textContent="Price: ₹"+product.price;

// document.getElementById("modalRating").textContent="Rating: "+product.rating;

// document.getElementById("modalCategory").textContent="Category: "+product.category;

// modal.style.display="block";

// }

// });

// document.getElementById("close").onclick=function(){

// modal.style.display="none";

// };

// window.onclick=function(e){

// if(e.target===modal){

// modal.style.display="none";

// }

// };



// Task 5: Shopping Cart (Company-Level)

// const products=[
// {
// id:1,
// title:"Laptop",
// price:50000,
// image:"https://s13emagst.akamaized.net/products/30054/30053922/images/res_0a72621e5251fbc23930948c0f3abc23.jpg?width=768&height=768&hash=2DE0D07587DCC44CE43BDDAE5D47EDDF"
// },
// {
// id:2,
// title:"Headphones",
// price:2500,
// image:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/f2f55668-6c0c-4828-bc60-2d369a2ae011.__CR0,0,362,453_PT0_SX362_V1___.jpg"
// },
// {
// id:3,
// title:"Mouse",
// price:800,
// image:"https://i5.walmartimages.com/seo/Adesso-Three-Button-Desktop-Optical-Scroll-USB-Mouse-USB-2-0-Left-Right-Hand-Use-Black-HC3003US_66c4d352-0c26-4f35-aff8-49bc91162301.727e2bfa1ac069598db3b463da1636b6.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF"
// }
// ];

// let cart=[];

// const productDiv=document.getElementById("products");

// function displayProducts(){

// productDiv.innerHTML="";

// products.forEach(product=>{

// productDiv.innerHTML+=`

// <div class="card">

// <img src="${product.image}">

// <h3>${product.title}</h3>

// <p>₹${product.price}</p>

// <button onclick="addToCart(${product.id})">
// Add To Cart
// </button>

// </div>

// `;

// });

// }

// displayProducts();

// function addToCart(id){

// let product=products.find(p=>p.id===id);

// let item=cart.find(c=>c.id===id);

// if(item){

// item.quantity++;

// }else{

// cart.push({
// ...product,
// quantity:1
// });

// }

// displayCart();

// }

// function displayCart(){

// document.getElementById("count").textContent=

// cart.reduce((sum,item)=>sum+item.quantity,0);

// let rows="";

// cart.forEach(item=>{

// rows+=`

// <tr>

// <td>${item.title}</td>

// <td>${item.quantity}</td>

// <td>₹${item.price*item.quantity}</td>

// </tr>

// `;

// });

// document.getElementById("cartItems").innerHTML=rows;

// let grandTotal=cart.reduce((sum,item)=>{

// return sum+(item.price*item.quantity);

// },0);

// document.getElementById("grandTotal").textContent="₹"+grandTotal;

// }