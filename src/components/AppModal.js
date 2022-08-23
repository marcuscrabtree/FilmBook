import React, { useState } from 'react'
import { Modal } from 'bootstrap'
import ModalContent from './ModalContent'


const AppModal = ({children}) => {
    const [open, SetOpen] = useState(false)

    const handleOpen = () => {
        SetOpen(true)
    }

    const handleClose = () => {
        SetOpen(false)
    }

  return (
    <div>
        <div onClick={handleOpen}> {children} </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                 <ModalContent/>
            </Modal>
        
    </div>
  )
}

export default AppModal