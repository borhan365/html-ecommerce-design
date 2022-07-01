
var swiper = new Swiper(".mySwiper", {
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      navigation: false,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      navigation: false,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    }
  }
});

var swiper = new Swiper(".featuredProduct", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      navigation: false,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  }
});


// login / register
const loginElement = document.getElementById('login')
const loginCross = document.getElementById('login-cross')
const registerCross = document.getElementById('register-cross')
const signInBtn = document.getElementById('signIn')

// register
const registerBtn = document.getElementById('register-btn')
const registerElement = document.getElementById('register')

const loginBtn = document.getElementById('login-btn')

// login popup
signInBtn.addEventListener('click', function () {
  loginElement.classList.add('active-login')

  // click to remove login form
  loginCross.addEventListener('click', function() {
    loginElement.classList.remove('active-login')
  })

  // click to remove login class and show register class
  registerBtn.addEventListener('click', function() {
    // first remove/hide login form
    loginElement.classList.remove('active-login')

    // after show register from
    registerElement.classList.add('active-register')

    // click to cross then hide register
    registerCross.addEventListener('click', function() {
      registerElement.classList.remove('active-register')
    })

    // if click to login then go back
    loginBtn.addEventListener('click', function() {
      registerElement.classList.remove('active-register')
      loginElement.classList.add('active-login')
    })
  })

})

// click to increase & decrease value
const increaseBtn = document.querySelectorAll('button#increase')
const decreaseBtn = document.querySelectorAll('button#decrease')
const inputField = document.getElementById('inputNumber')

 
 // start button for add count 
 for(let i=0; i<increaseBtn.length; i++){
  increaseBtn[i].addEventListener('click', function(e){
    e.target.parentNode.children[1].value = parseInt(e.target.parentNode.children[1].value) + 1
  })
}
// end button for add count

  // start button for minus 
  for(let i = 0; decreaseBtn.length; i++) {

    decreaseBtn[i].addEventListener('click', function(e){
      if(e.target.parentNode.children[1].value <= 1) {
        e.target.parentNode.children[1].value = 1;
      } else {
        e.target.parentNode.children[1].value = parseInt(e.target.parentNode.children[1].value) - 1
      }
    })
  }



// sidebar toggle card
const categorySidebarTitle = document.querySelectorAll('div#category-sidebar-title')

for (let i = 0; i < categorySidebarTitle.length; i++) {
  categorySidebarTitle[i].addEventListener('click', function() {

    categorySidebarTitle[i].parentNode.classList.toggle('active-category-sidebar-item')
    
    console.log(categorySidebarTitle[i].lastElementChild.classList.toggle('active-category-icon'))
  })
}

// click to open mobile menu and close
const mobileMenuCross = document.getElementById('mobile-menu-cross')
const mobileBarsIcon = document.getElementById('mobile-header-bars')
const mobileSidebarMenu = document.getElementById('main-mobile-mega-menu')

mobileBarsIcon.addEventListener('click', function(){
  mobileSidebarMenu.classList.toggle('active-mega-menu')
})

mobileMenuCross.addEventListener('click', function(){
  mobileSidebarMenu.classList.remove('active-mega-menu')
})


// mobile mega menu
const parentMenu = document.querySelectorAll('i#parent-caret')
for(let i = 0; i < parentMenu.length; i++) {
  parentMenu[i].addEventListener('click', function(){
    parentMenu[i].parentNode.parentElement.classList.toggle('active-parent-li')
    parentMenu[i].classList.toggle('active-parent-caret')
  })
}

// children menu
const childrenMenu = document.querySelectorAll('i#childen-caret')
for(let i = 0; i < childrenMenu.length; i++) {
  childrenMenu[i].addEventListener('click', function(){
    childrenMenu[i].parentNode.parentElement.classList.toggle('active-children-li')
    childrenMenu[i].classList.toggle('active-children-caret')
  })
}

// child menu
const childMenu = document.querySelectorAll('i#child-caret')
for(let i = 0; i < childMenu.length; i++) {
  childMenu[i].addEventListener('click', function(){
    childMenu[i].parentNode.parentElement.classList.toggle('active-child-li')
    childMenu[i].classList.toggle('active-child-caret')
  })
}


// Animate items
new WOW().init();


// Hero right slider
var HeroRightSlider = new Swiper('.hero-right-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


// toggle right cart sidebar

const cartIcon = document.getElementById('cart')
const cartBody = document.getElementById('cart-body')
const cartCross = document.getElementById('cart-cross')

cartIcon.addEventListener('click', function() {
  cartBody.classList.add('active-cart-body')
})

// cross
cartCross.addEventListener('click', function(e) {
  e.stopPropagation();
  cartBody.classList.remove('active-cart-body');
})


// Click to top menu here
const topButton = document.querySelector('.ClickTop');
window.addEventListener('scroll', () => {
  if( window.pageYOffset > 100) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove('active');
  }

  topButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })
});




