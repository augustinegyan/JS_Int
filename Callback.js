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
        console.log('Prodcution has started ');
        setTimeout(()=>{
            console.log('The fruit has been chopped');
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log('The machine was started');
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]}was added`);
                            setTimeout(()=>{
                                console.log('Serve Ice Cream');
                            },2000);
                        },3000)
                    },2000);
                },1000);
            },1000);
        },2000);
    });
};

order(0,production);