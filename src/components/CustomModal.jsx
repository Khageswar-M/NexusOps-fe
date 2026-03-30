import Modal from '@mui/material/Modal';

const CustomModal = ({children, open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {children}
        </Modal>
    )
}

export default CustomModal