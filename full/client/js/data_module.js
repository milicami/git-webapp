import { Post } from './entities/Post.js'

export const fetchPosts = () => {
    return fetch("http://127.0.0.1:3000")
        .then(response => response.json())
        .then(myResponse => {
            const myPosts = [];
            myResponse.forEach(post => {
                const myUser = new Post(post.id, post.title, post.intro);
                myPosts.push(myUser);

            });
            return myPosts;
        })
}