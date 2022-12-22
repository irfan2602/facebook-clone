import React from 'react'
import {MESSAGE_COUNT, OPEN_COMMENT_MODAL} from  './action'

const initialVal = {
  isOpen : false,
  messageCount:0,
}

const reducer = (state= initialVal,action) => {
  switch(action.type){
    case OPEN_COMMENT_MODAL :
      return {
        ...state,
        isOpen : action.isOpen
      }
    case MESSAGE_COUNT :
      return {
        ...state,
        messageCount : action.messageCount
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer;