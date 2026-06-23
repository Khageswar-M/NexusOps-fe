import Modal from '@mui/material/Modal';

const CustomModal = ({ children, open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='h-screen w-full flex items-center justify-center'>
                <div
                    className="
            absolute inset-0
            bg-white/5
            backdrop-blur-xs
            border border-white/10
            shadow-lg
            z-0

            opacity-0
            animate-glassFade

            will-change-transform
            transform-gpu
        "
                />
                {children}
            </div>
        </Modal>
    )
}

export default CustomModal