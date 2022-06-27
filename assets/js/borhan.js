
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

// test
const parentMobileMenu = document.getElementById('parent-mobile-menu')
const parentUL = document.getElementById('parent-ul');
console.log(parentUL.children.length);
const childrenElement=parentUL.children;
const arr = [1, 2, 3, 4]
console.log(childrenElement);

  for (let i = 0; i <childrenElement.length; i++) {
    const element = childrenElement[i];
    console.log(element)
    
  }





// New Sidebar toggle
// const sideBar = document.getElementById('LeftSidebar');
// const Bars = document.getElementById('burgerBar'); 
// Bars.addEventListener('click', function() {
//   sideBar.classList.toggle('active'); 
// })

// const CloseSidebar = document.getElementById('CloseSidebar');
// CloseSidebar.addEventListener('click', function() {
//   sideBar.classList.remove('active');
// })

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


// Profile page order list
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



// toggle right cart sidebar

const cartIcon = document.getElementById('cart')
const cartElement = document.getElementById('cart-body')
const cartCross = document.getElementById('cart-cross')

cartIcon.addEventListener('click', function() {
  cartElement.classList.add('active-cart-body')

  // cross
  cartCross.addEventListener('click', function() {
    cartElement.classList.remove('active-cart-body')
  })
})


// // Mobile toggle menu
// function OpenMobileMenu() {
//   var MobileSidebarMenu = document.getElementById("LeftSidebar");
//   if (MobileSidebarMenu.style.display === "none" || MobileSidebarMenu.style.display === "") {
//     MobileSidebarMenu.style.display = "block";
//   } else {
//     MobileSidebarMenu.style.display = "none";
//   }
// }






// Click to top

// const ClickToTop = document.querySelector('.ClickTop');

// window.addEventListener('scroll', () => {

//     if (window.pageYOffset > 100) {
//         ClickToTop.classList.add("active");
//     } else {
//         ClickToTop.classList.remove("active");
//     }
// })

// ClickToTop.addEventListener("click", function(){
//     window.scrollTo(0, 0);
// });



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

// Sticky menu
window.onscroll = function() {myFunction()};

var MainMenu = document.getElementById("MainMenu");
var stickyMenu = MainMenu.offsetTop;

function myFunction() {

  if (window.pageYOffset >= stickyMenu) {

    MainMenu.classList.add("stickyMenu")
    document.querySelector('stickyMenu').style.zIndex = "1000";

  } else {

    MainMenu.classList.remove("stickyMenu");

  }

}

