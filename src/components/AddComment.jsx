import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCommentModal from './AddCommentModal'

const AddComment = () => {
  const openDialog = useSelector(state => state.isOpen)
  const dispatch = useDispatch()

  const openClick = () => {
    dispatch({ type: "OPEN_COMMENT_MODAL", isOpen: true })

  }
  return (
    <div>
      <Button open={openDialog} variant='outlined'
        style={{ textAlign: "center", display: "flex" }}
        onClick={openClick}>
        Open Dialog
      </Button>
      <AddCommentModal />
    </div>
  )
}

export default AddComment