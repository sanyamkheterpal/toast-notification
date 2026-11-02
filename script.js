let toastBox = document.getElementById('toastbox');

let successmsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errormsg = '<i class="fa-solid fa-xmark"></i> Please fix the error';
let invalidsmsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function ShowToast(msg) {

    let toast = document.createElement('div');

    toast.classList.add('toast');

    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    if (msg.includes('xmark')) {
        toast.classList.add('error');
    }

    if (msg.includes('circle-exclamation')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);

}
