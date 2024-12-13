import React, { useState } from 'react'
import './UnitComments.css'

const UnitComments = (props) => {
  const {comments} = props
  const [showReply, setShowReply] = useState(false)

 
  return (
    <div className='comments-container'>
      {comments.map((comment, index) => {
        return <div> <div className='comment' key={index}> 
        <img src='https://styles.redditmedia.com/t5_13x7do/styles/profileIcon_tm219avt38wb1.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=462ed700a81605d9543993dff746b15c13f50917' alt="alt-apple" key={'image'} />
      <div className='comment-content'>
        <div className='comment-username'>{comment.userName}</div>
        <div className='comment-text'>{comment.comment}</div>
        <button onClick={() => setShowReply(!showReply)} className='comment-reply-button'>Replies</button>
      </div>
      </div>
      <div className='nested-comment'>{showReply && comment.replies && <UnitComments comments={comment.replies} />}</div></div>
      })}
    </div>
  )
}

export default UnitComments
