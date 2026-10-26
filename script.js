let toastBox = document.getElementById('toastbox');
let successmsg = 'successfully submitted';
let errormsg = 'please fix the error';
let invalidsmsg = 'invalid input, check again';
function ShowToast(msg) {
    let toast = document.createElement('div');

    toast.classList.add('toast');
    toast.innerHTML = msg;

    toastBox.appendChild(toast);
    
}