const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.map((post, index) => {
            output += <li>${post.title}</li>;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function creatPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
getPosts();
creatPost({ title: 'Post Three', body: 'this is post three' }, getPosts)

let x=new Promis(function(resolve , reject){
    if (document.getElementById("result").value=="true"){
        resolve("success");
    }else{
        reject("failed")
    }
    }
    );