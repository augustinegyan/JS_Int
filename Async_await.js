let stocks = {
    Fruits: ["strawberry","greapes", "bannana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ['chocolate','peanuts'],
}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log('Shop is closed'))
        }
    })
}

async function kitchen (){
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]}is sleclected`)

        await time(0)
        console.log("Start the production ")

        await time(2000)
        console.log('Cut the fruit')

        await time(1000)
        console.log( `${stocks.liquid[0]}and ${stocks.liquid[1]} is added`)


        await time(1000)
        console.log('start the machine')

        await time(2000)
        console.log('Ice cream placed on Cone')

        await time(3000)
        console.log('Toppings')

        await time(2000)
        console.log('Serve IceCream')


    } catch (error) {
        console.log("Customer Left",error)
    }
    finally{
        console.log("Day ended shop is closed")
    }
}

kitchen();










// let toppings_choice = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(
//                 console.log("Which topping do you like? ")

//             )
            


//         },3000)
//     })
// }
//     async function kitchen() {
//         console.log("A")
//         console.log("B")
//         console.log("C")

//         await toppings_choice();

//         console.log("D")
//         console.log("E") 
//     }

//     kitchen();

//     console.log('Doing  the dishes')
//     console.log("cleaning the tables")
//     console.log("Taking others order")

// async function order (){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc deos not exist",error)
//     }
//     finally{
//         console.log("runs code anyway")

//     }
// }

// order()
// .then(()=>{
//     console.log('........')
// })