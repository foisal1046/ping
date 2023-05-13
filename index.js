const cards=document.getElementById('card-section');
// console.log(cards);
const dataLoad= async()=>{
    const res=await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
    const data=await res.json()
    console.log(data);
    dataCatch(data)
}
const dataCatch=(data)=>{
    const dataAll=data;
    const div= document.createElement('div')
    div.classList.add('grid','p-5','grid-cols-1','md:grid-cols-2','lg:grid-cols-3','gap-4','content-center','place-items-center')
    // console.log(div);
    dataAll.forEach(element => {
        div.innerHTML+=`
            
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg w-full" src=${element.thumb} alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-purple-300 font">${element.title}</h5>
            </a>
            
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm font-bold text-orange-400">Normal Price $${element.normalPrice}</p>
                    <p class="text-sm font-bold text-green-400">Sale Price $${element.salePrice}</p>
                </div>
                <a href="#" class="text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
            </div>
            <p class=" text-gray-900 dark:text-yellow-400 ">Rating ${element.dealRating}</p>
        </div>
        </div>

        `
    });
    cards.appendChild(div)
}
dataLoad();