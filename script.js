


let toastBox = document.getElementById('toastbox')


function showToast(){
   let toast =  Document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = 'success';
   toastBox.appendChild(toast);
}