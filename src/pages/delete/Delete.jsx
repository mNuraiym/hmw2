
import React, { useEffect, useState } from 'react'

const deleteSelectedPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    const handleDeletePost = (postId) => {
        if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.ok) {
                        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))
                    } else {
                        console.log('Error deleting post')
                    }
                })
                .catch(error => {
                    console.log('Error:', error)
                })
        }
    }


    return (
        <div>
            <h2>Delete Selected Post</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <button onClick={() => handleDeletePost(post.id)}>Удалить пост</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default deleteSelectedPost