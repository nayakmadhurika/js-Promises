const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date()}
];

function getPosts(){
    setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} created ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}



// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push({...post, createdAt: new Date().getTime()})
//         callback();
//     }, 2000)
// }

// function create4thPost(post, callback){
//     setTimeout(() => {
//         posts.push({...post, createdAt: new Date().getTime()})
//         callback();
//     }, 4000)
// }


const createPost = async(post) => {

    const createPostpromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()})
            resolve();
        }, 3000);
    });
    let ticket = await createPostpromise;

    return ticket;
};

// preMovie().then((m) => console.log(`person3: shows ${m}`));

createPost({title: 'post three', body: 'this is post three'}).then(() => {
    getPosts()
})

// create4thPost({title: 'post four', body: 'this is post four'}, getPosts);