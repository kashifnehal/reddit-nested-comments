import React, { useState } from 'react';
import './UnitComments.css';

const UnitComments = (props) => {
  const { comments } = props;

  // Create a state to store the visibility of replies for each comment
  const [replyVisibility, setReplyVisibility] = useState(
    comments.reduce((acc, comment, index) => {
      acc[index] = false; // Initially, replies are hidden for all comments
      return acc;
    }, {})
  );

  // Function to toggle the visibility of replies
  const toggleReplies = (index) => {
    setReplyVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the visibility of the selected comment
    }));
  };

  return (
    <div className='comments-container'>
      {comments.map((comment, index) => (
        <div key={index}>
          <div className='comment'>
            <img
              src='https://styles.redditmedia.com/t5_13x7do/styles/profileIcon_tm219avt38wb1.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=462ed700a81605d9543993dff746b15c13f50917'
              alt='alt-apple'
            />
            <div className='comment-content'>
              <div className='comment-username'>{comment.userName}</div>
              <div className='comment-text'>{comment.comment}</div>
              <button
                onClick={() => toggleReplies(index)}
                className='comment-reply-button'
              >
                Replies
              </button>
            </div>
          </div>

          <div className='nested-comment'>
            {replyVisibility[index] && comment.replies && (
              <UnitComments comments={comment.replies} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnitComments;
