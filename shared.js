const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalNo = document.querySelector('.modal__action--negative')
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


for (let i = 0; i < selectPlanButtons.length; i ++) {
    selectPlanButtons[i].addEventListener('click', () => {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block'
    // modal.className = 'open' 이렇게 접근하게 되면 기존에 있던 클라스를 overwrite 하게 된다
    modal.classList.add('open');
    backdrop.classList.add('open');

})
}



backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNo) {
modalNo.addEventListener('click', closeModal);
}

function closeModal () {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';

    if (modal) {
    modal.classList.remove('open');
}
// 다른 페이지 안에 들어있는 index파일에는 해당 파일이 없기 때문에 해당 파일이 있을 때만 동작하게 해준다.
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})