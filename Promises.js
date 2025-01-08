let stocks = {
    Fruits: ["strawberry","greapes", "bannana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ['chocolate','peanuts'],
}

let is_shop_open = true;

let order = (time, work)=>{
    return new Promise( (ressolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                ressolve(work());
            },time)
           
        }else(reject(console.log('Our shop is closed')));
    })
}

order(2000, () =>
    console.log(`${stocks.Fruits[0]} was selected`)
)
.then(()=>{
    return order(0, () => console.log('Production has started'))
})
.then(()=>{
    return order(2000, () => console.log('The fruit has been chopped'))
})
.then(()=>{
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(()=>{
    return order(1000, () => console.log('The machine was started'))
})
.then(()=>{
    return order(2000, () => console.log(`${stocks.holder[0]} was selected`))
})
.then(()=>{
    return order(3000, () => console.log(`${stocks.toppings[0]} was added`))
})
.then(()=>{
    return order(2000, () => console.log('Serve Ice Cream'))
})
.catch(()=>{
    console.log('Customer left');
})
.finally(()=>{
    console.log('Day Ended, Shop is closed');
})