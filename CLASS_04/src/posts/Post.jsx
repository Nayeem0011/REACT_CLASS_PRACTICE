import React from 'react'
import { Fragment } from 'react'

const Post = ({post}) => {
    const {userId, body, title} = post
  return (
    <Fragment>
      <section className='post'>
        <small>User id : {userId}</small>
        <h1>{title}</h1>
        <p>{body}</p>
      </section>
    </Fragment>
  )
}

export default Post
