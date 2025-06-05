import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import Post from './Post'

const Posts = () => {
    const [postData, setPostData] = useState([])
    const [loading,setLoading] = useState(false)
       
    useEffect(() =>{
        setLoading(true)
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostData(data))
      setLoading(false)
    },[])

    // console.log(postData)
  return (
    <Fragment>

      <section className='containe'>
        <h1>Our all posts</h1>
      </section>
      {
        loading ? <p>Loading:</p> : <h1>Total Post : {postData.length}</h1>
      }
      <div className='post-container'>
        {
        postData.map((post, index)=> <Post key={index} post={post}/>)
        }
      </div>
   
    </Fragment>
  )
}

export default Posts
