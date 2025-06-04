import React, { Fragment } from 'react'
import { useParams } from 'react-router'

const BlogDetails = () => {
  const {id} = useParams()
  return (
    <Fragment>
      <h1>This is blogderails : {id}</h1>
    </Fragment>
  )
}

export default BlogDetails
