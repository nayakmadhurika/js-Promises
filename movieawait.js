console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {

    const promiseWifeBringTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrink = new Promise((resolve, reject) => resolve(`Cold drink`));

    let ticket = await promiseWifeBringTicks;

    console.log(`wife: i have the ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`)
    console.log('husband: we should go in')
    console.log('wife: i need butter on my popcorn')

    let butter = await getButter;

    console.log(`husband: i got some ${butter}`)
    console.log('husband: we should go in')
    console.log('wife: No, i need cold drinks');

    let coldDrink = await getColdDrink;
    console.log(`husband: i got ${coldDrink}`)
    console.log('wife: we should go in')
    console.log('husband: yup lets go');

    return ticket;
};

preMovie().then(() => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');