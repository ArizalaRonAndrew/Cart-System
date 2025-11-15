//step select all products
//log all products

const main = document.querySelector('#main');



const section = main.firstElementChild;
// console.log(section)

const article = section.firstElementChild;
//  console.log(article)

const h2 = article.firstElementChild;
const div = h2.nextElementSibling;

const products = div.firstElementChild.children;
//console.log(products);

//step 2 convert html collection to array

const productArray = Array.from(products);
// console.log(productArray)

productArray.forEach((p) => {
    const img = p.firstElementChild;
    const div4 = img.nextElementSibling;
    

    const h4 = div4.firstElementChild;
    const div5 = h4.nextElementSibling;
   

    const parag = div5.firstElementChild;
    const button = parag.nextElementSibling;
   
    button.addEventListener('click', () => {
        //step4
        const name = p.firstElementChild.nextElementSibling.firstElementChild.innerText;
        const price = p.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerText;
        
        const cartItem = document.createElement("div");
cartItem.classList.add("flex", "justify-between", "items-center", "border-b", "pb-3");

cartItem.innerHTML = `
    <div class="flex flex-col">
        <span class="text-gray-800 font-semibold text-lg">${name}</span>
        <div class="flex items-center space-x-3 mt-2">
            <button class="border-2 border-red-300 rounded px-1 hover:text-blue-700 transition">
                <i class="fa-solid fa-minus"></i>
            </button>
            <span class="text-gray-800 font-medium w-6 text-center select-none">1</span>
            <button class="border-2 border-red-300 rounded px-1 hover:text-blue-700 transition">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>

    <div class="flex items-center space-x-4">
        <span class="text-gray-800 font-semibold text-lg">${price}</span>
        <button class="text-red-600 hover:text-red-800 transition">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
`;

                       
        //step 5
        cart.appendChild(cartItem)
    })  
});


const cart = main
    .firstElementChild
    .firstElementChild
    .nextElementSibling
    .firstElementChild
    .nextElementSibling;

