import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'


const Comments = props => {
  const { getComments, commentsData} = props
  console.log("C: ", props)
  // const { comments, loading } = commentsData
  useEffect(()=> {
    getComments()
  }, [getComments])
  
  return (
    <div>ds
      {/* {comments.map(m => <div>{m.Author}</div>)} */}
    </div>

  )
}

Comments.propTypes = {

}

export default Comments
