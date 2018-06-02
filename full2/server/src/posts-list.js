const loremIpsum = require('lorem-ipsum');
const Post = require('./entities/Post.js');

const createId = () => {
    return Math.floor(Math.random() * 1000)
}

const createTitle = () => loremIpsum({
    count: 3,
    units: 'words'
})

const createIntro = () => loremIpsum({
    count: 2,
    units: 'sentences'
})

const createPosts = () => {
    let userPosts = [];
    for (let i = 0; i < 20; i++) {
        const id = createId();
        const title = createTitle();
        const intro = createIntro()
        const user = new Post(id, title, intro);
        userPosts.push(user);

    }
    return userPosts;
}

module.exports = { createPosts }