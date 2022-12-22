import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const AddCommentModal = () => {
    const isOpenState = useSelector(state => state.isOpen)
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch({ type: "OPEN_COMMENT_MODAL", isOpen: false })
    }

    return (
        <div>
            <Dialog
                open={isOpenState}
                close={onClose}
                fullWidth
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Alert Dialog</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Hello MUI Dialog Box,Learning MUI...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' size='small' onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddCommentModal