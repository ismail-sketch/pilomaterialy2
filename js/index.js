const burger = document.querySelector('.burger');
const burgerSpan = document.querySelectorAll('.burger span');
const menuList = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burgerSpan.forEach(item => {
        item.classList.toggle('active');
    })
    menuList.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')) {
        burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menuList.classList.remove('active');
        body.classList.remove('active');
    }
})

// Перемещение контактов их хедера в бургер-меню===========================
const headerContacts = document.querySelector('.header__contacts');
const headerContainer = document.querySelector('.header-container');
const menuList2 = document.querySelector('.menu__list');

function moveContacts() {
    if(window.innerWidth <= 510) {
        menuList2.insertAdjacentElement('beforeend', headerContacts);
    } else {
        headerContainer.insertAdjacentElement('beforeend', headerContacts);
    }
}
moveContacts();

window.addEventListener('resize', moveContacts);

// Добавить бордер хедеру================================
window.addEventListener('scroll', () => {
    if(window.scrollY > 600) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
})

// PopUp с формой===============================
const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.cross');
const popupBtns = document.querySelectorAll('.popup-btn');

popupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    })
})
if(cross !== null && cross !== undefined) {
    cross.addEventListener('click', (e) => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    })
}

overlay.addEventListener('click', (e) => {
    if(!e.target.closest('.form')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
})
