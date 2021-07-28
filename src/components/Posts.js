import React, { useState } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const getXMLResponse = async() => {
        const response = await fetch('https://news.bitcoin.com/feed/')
        const posts = await response.text()
        setPosts(posts)
    }

    getXMLResponse()

    return (
        <div>
            Posts: 
            <div>{posts}</div>
        </div>
    )
}

export default Posts

