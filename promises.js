const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date()}
];

const user = {
    username: 'Nikki',
    lastActivityTime: '13th of jan'
}

function getPosts(){
        let output = '';
        for(let i = 0; i < posts.length; i++){
            output += `<li>${posts[i].title}</li>`
        };
        document.body.innerHTML = output;
}

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

const deletePost = async() => {
    const deletepostpromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(posts.length > 0){
                resolve(posts.pop());
                    console.log('Post Deleted');
            } else {
                reject('No more posts to be deleted')
            }
        }, 1000)
    })
    let dlt = await deletepostpromise;

    return dlt;
}

function updatelastactivitytime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve(user.lastActivityTime)
        }, 1000);
    })
}

function userupdatesapost(){
    Promise.all([createPost, updatelastactivitytime])
    .then(([createPostresolves, updatelastactivitytimeresolves]) => {
        console.log(updatelastactivitytimeresolves)
    })
}

createPost({title: 'Post Three', body: 'This is post three'}).then(() => {
    getPosts()
    deletePost().then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
})
.catch(err => console.log(err))

setTimeout(() => {
    createPost({title: 'Post Four', body: 'This is post Four'}).then(() => {
        getPosts()
        setTimeout(() => {
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {})
                .catch((err) => {
                    console.log(err);
                })
            }).catch(err => console.log(err))
        }, 1000)
    }).catch(err => console.log(err))
}, 4000)

setTimeout(() => {
createPost({title: 'Post 5', body: 'This is post 5'}).then(updatelastactivitytime).then(() => {
        console.log(posts);
        console.log('Last Activity Time: ', user.lastActivityTime);
        getPosts()
        setTimeout(() => {
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {})
                .catch((err) => {
                    console.log(err);
                })
            }).catch(err => console.log(err))
        }, 1000)
    })
    .catch(err => console.log(err));
}, 9000)

setTimeout(() => {
createPost({title: 'Post 6', body: 'This is post 6'}).then(() => {
    getPosts();
    })
}, 13000)