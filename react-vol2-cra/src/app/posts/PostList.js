import React from 'react'
import PostItem from './PostItem'

const PostList = (props) => {
    const postList = props.myPosts
    return (
        <div className="container">
            <div className="row">
                {postList.map((post) => {
                    return <PostItem key={post.id} myPost={post} />
                })}
            </div>
        </div>
    )
}

export default PostList;