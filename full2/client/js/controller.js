import {fetchPosts} from './data_module.js'
import {displayPosts} from './ui_module.js'


export const init = () => {
    fetchPosts()
    .then(displayPosts)
}