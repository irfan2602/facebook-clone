import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button} from '@mui/material'

const AddMessage = () => {
    const messageCount  = useSelector(state => state.messageCount)
    /* const isOpenState = useSelector(state => state.isOpen) */
    const dispatch = useDispatch()

    const openClick = () => {
        dispatch({ type: "MESSAGE_COUNT", messageCount: messageCount+1 })

    }
    return (
        <div>
            <Button variant='outlined'
                style={{ textAlign: "center", display: "flex" }}
                onClick={openClick}>
                Increase Message
            </Button>
        </div>
    )
}

export default AddMessage