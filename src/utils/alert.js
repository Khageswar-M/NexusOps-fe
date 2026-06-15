import Swal from "sweetalert2";

export const showSuccess = (title, text) => {
    Swal.fire({
        title,
        text,
        icon: "success",
        customClass: {
            popup: "success-popup"
        }
    });
};

export const showError = (title, text) => {
    Swal.fire({
        title,
        text,
        icon: "error",
        customClass: {
            popup: "warning-popup"
        }
    });
};

export const showWarning = (title, text) => {
    Swal.fire({
        title,
        text,
        icon: "warning",
        customClass: {
            popup: "warning-popup"
        }
    });
}

export const showInfo = (title, text) => {
    Swal.fire({
        title, 
        text,
        icon: "info",
        customClass: {
            popup: "success-popup"
        }
    })
}