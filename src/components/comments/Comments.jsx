import React from 'react'
import UnitComments from '../UnitComments/UnitComments'
import { RedditComments } from './constants'

const Comments = () => {
  return (
    <div>
        Comments
      <UnitComments  comments={RedditComments}  />
    </div>
  )
}

export default Comments
