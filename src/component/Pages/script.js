 export const sidebar = document.querySelector('.sidebar');
export const toogleBtn = document.querySelector('.toggle-btn');

toogleBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
});