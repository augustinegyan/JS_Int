let stocks = {
    Fruits: ["strawberry","greapes", "bannana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ['chocolate','peanuts'],
}

let order = (Fruit_name, call_production) => {
    setTimeout( ()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        
        call_production();
    },2000)
};

let production = () => {
    setTimeout(()=>{
        console.log('Cut the Fruit');
    },1000);
};



let addwaterice = () => {
    setTimeout(()=>{
        console.log('Add water and ice');
    },1000)
}
order(0,production).setTimeout(()=>{
    addwaterice();
},1000);