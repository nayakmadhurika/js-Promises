console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
})



const getPopcorn = promiseWifeBringTicks.then((t) => {
    console.log('wife: i have the tics')
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn')
    console.log('husband: we should go in')
    console.log('wife: i need butter on my popcorn')
    return new Promise((resolve, reject) => resolve(`${t} butter`));
})

const getColdDrink = getButter.then((t) => {
    console.log('husband: i got some butter')
    console.log('husband: we should go in')
    console.log('wife: i need cold drinks')
    return new Promise((resolve, reject) => resolve(`${t} Cold drink`))
})

getColdDrink.then((t) => console.log(t))

console.log('person4: shows ticket')
console.log('person5: shows ticket')

console.log('hello')